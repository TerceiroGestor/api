<?php
declare(strict_types=1);

namespace Core\Http;

/**
 * Class Response
 *
 * Responsabilidade:
 * - Representa uma resposta HTTP da aplicação.
 * - Padroniza status, headers e payload da resposta.
 *
 * Padrões Aplicados:
 * - Response Object
 * - Factory Method
 *
 * Observações de Design:
 * - Não deve conter lógica de negócio.
 * - Não deve conhecer controllers ou regras da aplicação.
 * - Deve apenas formatar e enviar a resposta.
 *
 * Camada:
 * - Core / Http
 */

final class Response
{
    public function __construct(
        private mixed $data,
        private int $status = 200
    ) {}

    /**
     * Envia a resposta HTTP ao cliente.
     *
     * Responsabilidade:
     * - Define o status HTTP.
     * - Envia headers necessários.
     * - Serializa e imprime o payload.
     *
     * Observação:
     * - Deve ser chamado apenas uma vez por requisição.
     *
     * @return void
     */
    public function send(): void
    {
        http_response_code($this->status);
        header('Content-Type: application/json');
        echo json_encode($this->data);
    }

    /**
     * Cria uma resposta HTTP no formato JSON.
     *
     * Responsabilidade:
     * - Padroniza respostas JSON da aplicação.
     * - Define status HTTP e payload.
     *
     * @param array $data Dados a serem serializados em JSON.
     * @param int $status Código HTTP da resposta.
     *
     * @return self Instância de Response configurada.
     */
    public static function json(array $data, int $status = 200): self
    {
        return new self($data, $status);
    }
}
