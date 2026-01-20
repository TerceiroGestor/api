<?php

declare(strict_types=1);

namespace Modules\Contact;

use Core\Database\BaseRepository;
use Core\Database\Database;

/**
 * Class ContactRepository
 *
 * Repositório do módulo Contact.
 *
 * Responsabilidades:
 * - CRUD genérico do BaseRepository
 * - Consultas específicas relacionadas a pessoa
 */
final class ContactRepository extends BaseRepository
{
    protected string $table = 'contacts';

    protected function allowedColumns(): array
    {
        return [
            'id',
            'person_id',
            'number',
            'type',
            'main',
            'created',
            'updated',
            'active',
        ];
    }

    public function __construct()
    {
        parent::__construct(Database::connect());
    }

    /**
     * Busca todos os contatos de uma pessoa.
     *
     * @param string $personId
     * @return array<int, array<string, mixed>>
     */
    public function findByPerson(string $personId): array
    {
        $stmt = $this->pdo->prepare(
            "SELECT * FROM {$this->table} WHERE person_id = :person_id"
        );
        $stmt->execute(['person_id' => $personId]);
        return $stmt->fetchAll();
    }

    public function createForPerson(string $personId, array $data): array
    {
        $data['person_id'] = $personId;

        $this->create($data);

        return $this->findBy('person_id', $personId);
    }

    /**
     * Relacionamento N:1 (inverso)
     * @param string $personId
     * @return array|null
     */
    protected function person(string $personId): ?array
    {
        $repo = new \Modules\Person\PersonRepository();
        return $repo->find($personId);
    }

}
