# Provisionamento Completo do Servidor – Debian 13

Este documento descreve **todo o processo de construção de um servidor Debian 13 do zero**, capaz de rodar:

* Backend **PHP 8 + PHP-FPM + FastCGI**
* Frontend **Next.js (Node.js)**
* **Nginx** como proxy reverso
* **MariaDB** como banco de dados
* Código versionado no GitHub

Repositório do projeto:

```
https://github.com/TerceiroGestor/api.git
```

---

## 1. Atualização inicial do sistema

```bash
apt update && apt upgrade -y
apt install -y curl git unzip ca-certificates lsb-release gnupg
```

---

## 2. Instalação do PHP 8 + extensões

```bash
apt install -y \
  php8.2 \
  php8.2-fpm \
  php8.2-cli \
  php8.2-common \
  php8.2-mysql \
  php8.2-pdo \
  php8.2-mbstring \
  php8.2-xml \
  php8.2-curl \
  php8.2-zip \
  php8.2-gd
```

Verificar PHP:

```bash
php -v
```

Verificar PHP-FPM:

```bash
systemctl status php8.2-fpm
```

Socket utilizado:

```
/var/run/php/php-fpm.sock
```

---

## 3. Instalação do Composer

```bash
cd /tmp
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
```

Verificar:

```bash
composer --version
```

---

## 4. Instalação do Node.js e NPM (Next.js)

Adicionar repositório LTS:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
```

Verificar:

```bash
node -v
npm -v
```

---

## 5. Clonar o projeto

```bash
mkdir -p /var/www/api
cd /var/www/api

git clone https://github.com/TerceiroGestor/api.git .
```

Estrutura esperada:

```text
/var/www/api
├── api        (Backend PHP)
└── frontend   (Next.js)
```

---

## 6. Instalação do Backend (PHP API)

```bash
cd /var/www/api/api
composer install
```

Configurar permissões:

```bash
chown -R www-data:www-data /var/www/api/api
```

---

## 7. Instalação do Frontend (Next.js)

```bash
cd /var/www/api/frontend
npm install
npm run build
```

Permissões:

```bash
chown -R www-data:www-data /var/www/api/frontend
```

---

## 8. Criar o serviço systemd do Frontend

Arquivo:

```bash
nano /etc/systemd/system/frontend.service
```

Conteúdo:

```ini
[Unit]
Description=Frontend - Next.js
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/api/frontend
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=3
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Ativar serviço:

```bash
systemctl daemon-reexec
systemctl daemon-reload
systemctl enable frontend.service
systemctl start frontend.service
```

Verificar:

```bash
systemctl status frontend.service
```

---

## 9. Instalação do Nginx

```bash
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

---

## 10. Configuração do Nginx

Criar arquivo:

```bash
nano /etc/nginx/sites-available/api
```

Conteúdo:

```nginx
server {
    listen 127.0.0.1:8000 default_server;

    server_name lab.com www.lab.com;

    root /var/www/api/api/public;
    index index.php index.html;

    location / {
        try_files $uri /index.php?$query_string;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass unix:/var/run/php/php-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_index index.php;
    }
}

server {
    listen 80;
    server_name meusistema.local;

    # FRONTEND (Next.js)
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_connect_timeout 5s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }

    # BACKEND (PHP API)
    location /api/ {
        rewrite ^/api/?(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:8000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

        proxy_connect_timeout 5s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }
}
```

Ativar site:

```bash
ln -s /etc/nginx/sites-available/api /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

---

## 11. Instalação do MariaDB

```bash
apt install -y mariadb-server
systemctl enable mariadb
systemctl start mariadb
```

Segurança básica:

```bash
mysql_secure_installation
```

---

## 12. Criação do banco e usuários

Entrar no MariaDB:

```bash
mysql -u root -p
```

Criar banco e usuário:

```sql
CREATE DATABASE terceirogestor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'terceirogestor'@'%' IDENTIFIED BY 'SENHA_FORTE';

GRANT ALL PRIVILEGES ON terceirogestor.* TO 'terceirogestor'@'%';

FLUSH PRIVILEGES;
```

---

## 13. Importar o schema

```bash
mysql -u terceirogestor -p terceirogestor < /var/www/api/api/schema.init.sql
```

---

## 14. Checklist Final

* [ ] PHP-FPM ativo
* [ ] MariaDB rodando
* [ ] Frontend service ativo
* [ ] Nginx validado
* [ ] Banco criado e populado
* [ ] Permissões corretas

---

## 15. Observação Final

Este setup foi pensado para:

* Ambiente de produção
* Escalável
* Compatível com CI/CD
* Separação clara entre frontend e backend

---

**Servidor pronto para uso 🚀**

