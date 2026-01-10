<?php

declare(strict_types=1);

namespace Modules\Person;

use Core\Database\BaseRepository;
use Core\Database\Database;

/**
 * Class PersonRepository
 *
 * Repositório do módulo Person.
 *
 * Responsabilidades:
 * - Definir a tabela
 * - Usar CRUD genérico do BaseRepository
 * - Criar consultas específicas do domínio Person
 */
final class PersonRepository extends BaseRepository
{
    /**
     * Nome da tabela associada ao módulo.
     *
     * @var string
     */
    protected string $table = 'persons';

    protected function allowedColumns(): array
    {
        return [
            'id',
            'name',
            'lastname',
            'active'
        ];
    }

    /**
     * PersonRepository constructor.
     *
     * Inicializa o repositório com a conexão PDO.
     */
    public function __construct()
    {
        parent::__construct(
            Database::connect()
        );
    }
}
