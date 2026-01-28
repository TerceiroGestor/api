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
