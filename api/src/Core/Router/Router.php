<?php
declare(strict_types=1);

namespace Core\Router;

use Core\Http\Request;
use Core\Http\Response;
use Core\Http\Controller;

/**
 * Router
 *
 * Responsável por registrar e despachar rotas HTTP.
 *
 * Padrões:
 * - Front Controller
 * - Dispatcher
 */
final class Router
{
    private Request $request;

    /**
     * @var array<string, array<string, array{0:string,1:string}>>
     */
    private array $routes = [];

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /* =========================
     * Registro de rotas
     * ========================= */

    public function get(string $uri, array $action): void
    {
        $this->add('GET', $uri, $action);
    }

    public function post(string $uri, array $action): void
    {
        $this->add('POST', $uri, $action);
    }

    public function put(string $uri, array $action): void
    {
        $this->add('PUT', $uri, $action);
    }

    public function delete(string $uri, array $action): void
    {
        $this->add('DELETE', $uri, $action);
    }

     private function add(string $method, string $uri, array $action): void
    {
        $this->routes[$method][] = [
            'uri'    => $uri,
            'action'=> $action,
            'regex' => $this->compileRoute($uri),
        ];
    }

    /* =========================
     * Dispatch
     * ========================= */
    public function dispatch(): Response
    {
        $method = $this->request->method();
        $uri    = $this->request->uri();

        foreach ($this->routes[$method] ?? [] as $route) {
            if (preg_match($route['regex'], $uri, $matches)) {

                $params = array_filter(
                    $matches,
                    fn ($key) => !is_int($key),
                    ARRAY_FILTER_USE_KEY
                );

                [$controllerClass, $controllerMethod] = $route['action'];

                /** @var Controller $controller */
                $controller = new $controllerClass($this->request);

                $resolvedParams = array_map(function ($param) {
                    return ctype_digit($param) ? (int) $param : $param;
                }, array_values($params));

                return $controller->$controllerMethod(...$resolvedParams);
            }
        }

        return Response::json([
            'error' => 'Route not found'
        ], 404);
    }

    /* =========================
     * Helpers
     * ========================= */
    private function compileRoute(string $uri): string
    {
        $pattern = preg_replace(
            '#\{([\w]+)\}#',
            '(?P<$1>[^/]+)',
            $uri
        );

        return "#^{$pattern}$#";
    }
}
