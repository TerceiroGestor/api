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
            'created',
            'updated',
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
        parent::__construct(Database::connect());
    }


    /**
     * Relação 1:N → contacts
     */
    public function exists(string $personId): array
    {
        $stmt = $this->pdo->prepare(
            "SELECT true FROM {$this->table} WHERE id = :id"
        );

        $stmt->execute(['id' => $personId]);
        return $stmt->fetch() ?: null;
    }

    /**
     * Relação 1:N → contacts
     */
    protected function contacts(string $personId): array
    {
        $repo = new \Modules\Contact\ContactRepository();
        return $repo->findByPerson($personId);
    }

    protected function address(string $personId): ?array
    {
        $stmt = $this->pdo->prepare(
            "SELECT * FROM addresses WHERE person_id = :id LIMIT 1"
        );
        $stmt->execute(['id' => $personId]);

        return $stmt->fetch() ?: null;
    }

    protected function relatives(string $personId): ?array
    {
        $stmt = $this->pdo->prepare(
            "SELECT
                    r.relationship,
                    r.relative_id,
                    p.name,
                    p.lastname
                FROM relatives r
                JOIN persons p ON p.id = r.relative_id
                WHERE r.person_id = :id"
        );

        $stmt->execute(['id' => $personId]);
        return $stmt->fetchAll() ?: null;
    }


}
