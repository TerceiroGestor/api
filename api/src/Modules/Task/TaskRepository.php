<?php

declare(strict_types=1);

namespace Modules\Task;

use Core\Database\BaseRepository;
use Core\Database\Database;

/**
 * Class TaskRepository
 *
 * Repositório do módulo Task.
 *
 * Responsabilidades:
 * - Definir a tabela
 * - Usar CRUD genérico do BaseRepository
 * - Criar consultas específicas do domínio Task
 */
final class TaskRepository extends BaseRepository
{
    /**
     * Nome da tabela associada ao módulo.
     *
     * @var string
     */
    protected string $table = 'tasks';

    protected function allowedColumns(): array
    {
        return [
            'id',
            'title',
            'description',
            'due_date',
            'budget',
            'active',
            'created',
            'updated',
        ];
    }

    /**
     * PersonRepository constructor.
     *
     * Inicializa o repositório com a conexão PDO.
     */
    public function __construct()
    {
        parent::__construct(Database::connect());
    }

}
