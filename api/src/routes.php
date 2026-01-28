<?php
declare(strict_types=1);

use App\Controllers\HealthController;
use Modules\Person\PersonController;
use Modules\Contact\ContactController;
use Modules\Task\TaskController;

/** @var Core\Router\Router $router */

//Health
$router->get('/health', [HealthController::class, 'index']);

//Person
$router->get('/person', [PersonController::class, 'index']);
$router->get('/person/{id}', [PersonController::class, 'show']);
//$router->get('/person/{column}/{value}', [PersonController::class, 'query']);

$router->post('/person', [PersonController::class, 'store']);
$router->put('/person/{id}', [PersonController::class, 'update']);
$router->delete('/person/{id}', [PersonController::class, 'activate']);


$router->post('/person/{id}/contacts', [ContactController::class, 'store']);
$router->put('/person/{id}/contacts/{contactId}', [ContactController::class, 'update']);
$router->delete('/person/{id}/contacts/{contactId}', [ContactController::class, 'destroy']);

//Tasks
$router->get('/tasks', [TaskController::class, 'index']);
$router->post('/tasks', [TaskController::class, 'store']);
$router->put('/tasks/{id}', [TaskController::class, 'update']);
$router->delete('/tasks/{id}', [TaskController::class, 'destroy']);