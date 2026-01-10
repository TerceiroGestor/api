<?php

namespace Core\Database;

use PDO;
use PDOException;

/**
 * Class Database
 *
 * Gerencia a conexão PDO utilizando variáveis do .env
 */
final class Database
{
    /**
     * Instância única do PDO.
     *
     * @var PDO|null
     */
    private static ?PDO $connection = null;

    /**
     * Retorna uma conexão PDO ativa.
     *
     * @return PDO
     */
    public static function connect(): PDO
    {
        if (self::$connection === null) {

            // Carrega variáveis de ambiente
            require_once __DIR__ . '/../Config/env.php';

            try {
                self::$connection = new PDO(
                    sprintf(
                        '%s:host=%s;port=%s;dbname=%s;charset=%s',
                        $_ENV['DB_DRIVER'],
                        $_ENV['DB_HOST'],
                        $_ENV['DB_PORT'],
                        $_ENV['DB_NAME'],
                        $_ENV['DB_CHARSET']
                    ),
                    $_ENV['DB_USER'],
                    $_ENV['DB_PASS'],
                    [
                        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    ]
                );
            } catch (PDOException $e) {
                throw new PDOException(
                    'Database connection failed: ' . $e->getMessage()
                );
            }
        }

        return self::$connection;
    }
}
