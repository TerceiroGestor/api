<?php
declare(strict_types=1);

namespace Core\Http;

/**
 * Request
 *
 * Representa a requisição HTTP atual.
 *
 * Padrões:
 * - Value Object
 * - Factory Method
 */
final class Request
{
    private string $method;
    private string $uri;
    private array $query;
    private array $body;

    private function __construct(
        string $method,
        string $uri,
        array $query,
        array $body
    ) {
        $this->method = $method;
        $this->uri = $uri;
        $this->query = $query;
        $this->body = $body;
    }

    public static function capture(): self
    {
        return new self(
            $_SERVER['REQUEST_METHOD'] ?? 'GET',
            parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '/',
            $_GET,
            self::parseBody()
        );
    }

    private static function parseBody(): array
    {
        if (
            isset($_SERVER['CONTENT_TYPE']) &&
            str_contains($_SERVER['CONTENT_TYPE'], 'application/json')
        ) {
            return json_decode(
                file_get_contents('php://input'),
                true
            ) ?? [];
        }

        return $_POST;
    }

    public function method(): string
    {
        return $this->method;
    }

    public function uri(): string
    {
        return $this->uri;
    }

    public function input(string $key = null): mixed
    {
        return $key
            ? ($this->body[$key] ?? null)
            : $this->body;
    }

    public function query(string $key = null): mixed
    {
        return $key
            ? ($this->query[$key] ?? null)
            : $this->query;
    }

    public function header(string $key): ?string
    {
        $key = 'HTTP_' . strtoupper(str_replace('-', '_', $key));
        return $_SERVER[$key] ?? null;
    }
}
