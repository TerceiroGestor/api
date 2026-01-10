<?php 
/**
 * Front Controller da aplicação.
 *
 * Responsabilidade:
 * - Ponto único de entrada do sistema.
 * - Inicializa dependências principais.
 * - Orquestra o fluxo Request → Router → Response.
 *
 * Padrões Aplicados:
 * - Front Controller Pattern
 *
 * Observações de Design:
 * - Não deve conter lógica de negócio.
 * - Não deve conter regras de roteamento.
 */

error_reporting(E_ALL);
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');


require_once __DIR__ . '/../vendor/autoload.php';

use Core\Http\Request;
use Core\Router\Router;
use Core\Kernel;

$request = Request::capture();

// Middlewares globais
Kernel::bootstrap($request);

$router = new Router($request);

require_once __DIR__ . '/../src/routes.php';

$response = $router->dispatch();
$response->send();
