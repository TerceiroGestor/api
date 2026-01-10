<?php
declare(strict_types=1);

namespace Core\Http;

/**
 * Controller
 *
 * Classe base para todos os controllers.
 *
 * Responsabilidades:
 * - Acesso ao Request
 * - Helpers comuns (response, json, etc)
 *
 * Padrões:
 * - Template Method
 * - Base Controller
 */
abstract class Controller
{
    protected Request $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
}
