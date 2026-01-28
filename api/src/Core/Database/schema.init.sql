CREATE DATABASE terceirogestor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE USER 'terceirogestor'@'%' IDENTIFIED BY '7OFq2P9-Bv72';


GRANT ALL PRIVILEGES ON terceirogestor.* TO 'terceirogestor'@'%';


FLUSH PRIVILEGES;

mysql -u terceirogestor -p terceirogestor < /var/www/api/api/src/Core/Database/tasks.schema.sql

CREATE USER 'terceirogestor'@'%'
IDENTIFIED BY '7OFq2P9-Bv72';



