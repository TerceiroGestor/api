# Frontend – Serviço systemd (Next.js)

Este documento descreve como criar, configurar e gerenciar o serviço do Frontend Next.js utilizando systemd em um servidor Debian/Linux.

## ⚙️ 1. Criar o serviço systemd

nano /etc/systemd/system/frontend.service

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


## 🔄 2. Recarregar o systemd
systemctl daemon-reexec
systemctl daemon-reload

systemctl enable frontend.service
systemctl start frontend.service

systemctl status frontend.service

## 📜 3. Ver logs do serviço

journalctl -u frontend.service -f
journalctl -u frontend.service --since "10 minutes ago"


## 🔐 4. Permissões recomendadas
chown -R www-data:www-data /var/www/api/frontend
