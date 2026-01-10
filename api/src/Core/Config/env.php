<?php

$envPath = dirname(__DIR__, 3) . '/.env';

if (!file_exists($envPath)) {
    throw new RuntimeException(".env file not found at: {$envPath}");
}

$_ENV = array_merge(
    $_ENV,
    parse_ini_file($envPath)
);