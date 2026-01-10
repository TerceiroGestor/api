<?php
declare(strict_types=1);

use App\Controllers\HealthController;
use Modules\Person\PersonController;

/** @var Core\Router\Router $router */

//Health
$router->get('/health', [HealthController::class, 'index']);

//Person
$router->get('/people', [PersonController::class, 'index']);
$router->get('/people/{id}', [PersonController::class, 'show']);
$router->get('/people/{column}/{value}', [PersonController::class, 'query']);

$router->post('/people', [PersonController::class, 'store']);
$router->put('/people/{id}', [PersonController::class, 'update']);
$router->delete('/people/{id}', [PersonController::class, 'destroy']);

