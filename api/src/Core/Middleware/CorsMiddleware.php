<?php

namespace Core\Middleware;

use Core\Http\Request;
use Core\Http\Middleware;

class CorsMiddleware implements Middleware
{
    private array $allowedOrigins;

    public function __construct(array $allowedOrigins = [])
    {
        $this->allowedOrigins = $allowedOrigins;
    }

    public function handle(Request $request): void
    {
        $origin = $request->header('Origin');

        if ($origin && $this->isAllowed($origin)) {
            header("Access-Control-Allow-Origin: $origin");
            header('Vary: Origin');
            header('Access-Control-Allow-Credentials: true');
        }

        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

        if ($request->method() === 'OPTIONS') {
            http_response_code(204);
            exit;
        }
    }

    private function isAllowed(string $origin): bool
    {
        if (empty($this->allowedOrigins)) {
            return true; // aceita qualquer origem (DEV)
        }

        return in_array($origin, $this->allowedOrigins, true);
    }
}
