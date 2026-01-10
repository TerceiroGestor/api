<?php

namespace Core;

use Core\Http\Request;
use Core\Middleware\CorsMiddleware;

class Kernel
{
    public static function bootstrap(Request $request): void
    {
        $middlewares = [
            new CorsMiddleware([
                //'http://localhost:3000',
                //'http://192.168.0.10:3000',
            ]),
        ];

        foreach ($middlewares as $middleware) {
            $middleware->handle($request);
        }
    }
}
