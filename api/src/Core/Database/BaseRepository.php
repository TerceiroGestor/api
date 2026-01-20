<?php

declare(strict_types=1);

namespace Core\Database;

use PDO;
use Core\Exceptions\NotFoundException;
use Ramsey\Uuid\Uuid;

/**
 * Class BaseRepository
 *
 * Classe base para repositórios de acesso a dados.
 * Fornece operações CRUD genéricas utilizando PDO.
 *
 * Responsabilidade:
 * - Executar queries
 * - Mapear dados
 * - Não conhecer regras de negócio
 * - Não conhecer HTTP
 * - Não conhecer variáveis de ambiente
 */
abstract class BaseRepository
{
    /**
     * Conexão PDO ativa.
     *
     * @var PDO
     */
    protected PDO $pdo;


    /**
     * Nome da tabela associada ao repositório.
     *
     * Deve ser definido pela classe filha.
     *
     * @var string
     */
    protected string $table;

    /** @var string[] */
    protected array $relations = [];

    public function with(string $relation): static
    {
        $this->relations[] = $relation;
        return $this;
    }

    protected function loadRelations(array $entity): array
    {
        foreach ($this->relations as $relation) {
            if (method_exists($this, $relation)) {
                $entity[$relation] = $this->{$relation}($entity['id']);
            }
        }

        return $entity;
    }

    /**
     * Lista de colunas permitidas para busca dinâmica.
     *
     * @return array<int, string>
     */
    abstract protected function allowedColumns(): array;

    /**
     * BaseRepository constructor.
     *
     * Recebe a dependência PDO já configurada.
     *
     * @param PDO $pdo
     */
    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * Retorna todos os registros da tabela.
     *
     * @return array<int, array<string, mixed>>
     */
    public function findAll(): array
    {
        $stmt = $this->pdo->query(
            "SELECT * FROM {$this->table}"
        );

        return $stmt->fetchAll();
    }

    /**
     * Busca um registro pelo ID.
     *
     * @param string $id
     * @return array<string, mixed>|null
     */
    public function find(string $id): ?array
    {
        $stmt = $this->pdo->prepare(
            "SELECT * FROM {$this->table} WHERE id = :id"
        );
        $stmt->execute(['id' => $id]);

        $entity = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$entity) {
            return null;
        }

        return $this->loadRelations($entity);
    }

    /**
     * Busca um único registro por uma coluna específica.
     *
     * @param string $column
     * @param mixed  $value
     * @return array<string, mixed>|null
     */
    public function findBy(string $column, mixed $value): ?array
    {
        if (!in_array($column, $this->allowedColumns(), true)) {
            throw new \InvalidArgumentException("Coluna inválida: {$column}");
        }

        $stmt = $this->pdo->prepare(
            "SELECT * FROM {$this->table} WHERE {$column} = :value"
        );

        $stmt->execute(['value' => $value]);

        return $stmt->fetchAll() ?: null;
    }


    /**
     * Insere um novo registro na tabela.
     *
     * @param array<string, mixed> $data
     * @return bool
     */
    public function create(array $data): bool
    {
        // Se não tiver ID, gera um UUID
        if (!isset($data['id'])) {
            $data['id'] = Uuid::uuid4()->toString();
        }

        $columns = implode(', ', array_keys($data));
        $params  = ':' . implode(', :', array_keys($data));

        $stmt = $this->pdo->prepare(
            "INSERT INTO {$this->table} ($columns) VALUES ($params)"
        );

        return $stmt->execute($data);
    }

    /**
     * Atualiza um registro existente.
     *
     * @param int $id
     * @param array<string, mixed> $data
     * @throws \InvalidArgumentException
     * @throws \RuntimeException
     * @return void
     */
    public function update(string $id, array $data): void
    {   
        if (empty($data)) {
            throw new \InvalidArgumentException('Nenhum dado fornecido para atualização');
        }

        $fields = implode(
            ', ',
            array_map(
                fn (string $key): string => "$key = :$key",
                array_keys($data)
            )
        );

        $data['id'] = $id;

        $stmt = $this->pdo->prepare(
            "UPDATE {$this->table} SET $fields WHERE id = :id"
        );

        $stmt->execute($data);

        if ($stmt->rowCount() === 0) {
            throw new \RuntimeException('Registro não encontrado ou nenhum dado alterado');
        }
    }

    /**
     * Remove um registro pelo ID.
     *
     * @param int $id
     * @return bool
     */
    public function destroy($id): void
    {
        $stmt = $this->pdo->prepare(
            "DELETE FROM {$this->table} WHERE id = :id"
        );

        $stmt->execute(['id' => $id]);

        if ($stmt->rowCount() === 0) {
            throw new NotFoundException("Registro não encontrado");
        }
    
    }

    /**
     * Deleted
     *
     * @param int $id
     * @return bool
     */
    public function activate(string $id): void
    {
        $stmt = $this->pdo->prepare(
            "UPDATE {$this->table} SET active = 0 WHERE id = :id"
        );

        $stmt->execute(['id' => $id]);

        if ($stmt->rowCount() === 0) {
            throw new NotFoundException("Registro não encontrado");
        }
    
    }
}
