<?php
declare(strict_types=1);

namespace App\Controllers;

use Core\Http\Controller;
use Core\Http\Request;
use Core\Http\Response;

/**
 * Class HealthController
 *
 * Responsabilidade:
 * - Fornecer endpoint de verificação de saúde da API.
 *
 * Padrões Aplicados:
 * - Controller
 *
 * Observações de Design:
 * - Não acessa banco de dados.
 * - Usado para monitoramento e testes.
 *
 * Camada:
 * - Modules / Health
 */
final class HealthController extends Controller
{
    /**
     * Retorna o status da API.
     *
     * @param Request $request Requisição HTTP atual.
     * @return Response
     */
     public function index(): Response
    {
        return Response::json([
            'status' => 'ok',
            'message' => 'API Funcionando'
        ]);
    }
}