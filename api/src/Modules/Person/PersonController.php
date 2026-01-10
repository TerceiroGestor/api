<?php
declare(strict_types=1);

namespace Modules\Person;

use Core\Http\Controller;
use Core\Http\Request;
use Core\Http\Response;
use Core\Exceptions\NotFoundException;
use Modules\Person\PersonRepository;

/**
 * PersonController
 *
 * CRUD básico do módulo Person.
 *
 * Responsabilidades:
 * - Receber dados do Request
 * - Retornar Response
 * - NÃO contém lógica de negócio
 */
final class PersonController extends Controller
{   

    private PersonRepository $repository;
    

    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->repository = new PersonRepository();
    }
    
    /**
     * GET /people
     */
    public function index(): Response
    {   
        $data = $this->repository->findAll();
        return Response::json($data);
    }

    /**
     * GET /people/{id}
     */
    public function show($id): Response
    {   
        $data = $this->repository->find($id);
        return Response::json([$data]);
    }

    /**
     * GET /people/{column}/{value}
     */
    public function query($column, $value): Response
    {   
        $data = $this->repository->findBy($column, $value);
        return Response::json([$data]);
    }

    /**
     * POST /people
     */
    public function store(): Response
    {
        $data = $this->request->input();
        $created = $this->repository->create($data);

        if (!$created) {
            return Response::json([
                'error' => 'Failed to create person'
            ], 400);
        }
        return Response::json([
        'message' => 'Person created successfully'
    ], 201);
    }

    /**
     * PUT /people/{id}
     */
    public function update($id): Response
    {
        try {
            $data = $this->request->input();

            $this->repository->update($id, $data);

            return Response::json([
                'message' => 'Pessoa atualizada com sucesso',
                'id' => $id
            ], 200);

        } catch (\InvalidArgumentException $e) {
            return Response::json([
                'error' => $e->getMessage()
            ], 400);

        } catch (\RuntimeException $e) {
            return Response::json([
                'error' => $e->getMessage()
            ], 404);

        } catch (\Throwable $e) {
            return Response::json([
                'error' => $e->getMessage(),
                'type'    => get_class($e),
                'file'    => $e->getFile(),
                'line'    => $e->getLine(),
            ], 500);
        }
    }

    /**
     * DELETE /people/{id}
     */
    public function destroy($id): Response
    {   
        try {
            $this->repository->delete($id);

            return Response::json([
                'message' => 'Pessoa removida com sucesso',
                'id' => $id
            ], 200);

        } catch (NotFoundException $e) {
            return Response::json([
                'error' => $e->getMessage()
            ], 404);
        }
    }
}
