<?php
declare(strict_types=1);

namespace Modules\Task;

use Core\Http\Controller;
use Core\Http\Request;
use Core\Http\Response;
use Core\Exceptions\NotFoundException;
use Modules\Task\TaskRepository;

/**
 * TaskController
 *
 * CRUD do módulo Task
 */
final class TaskController extends Controller
{
    private TaskRepository $repository;

    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->repository = new TaskRepository();
    }

    /**
     * GET /tasks
     */
    public function index(): Response
    {
        $data = $this->repository->findAll();
        return Response::json($data);
    }

    /**
     * GET /tasks/{id}
     */
    public function show(string $id): Response
    {
        $task = $this->repository->find($id);

        if (!$task) {
            return Response::json(['error' => 'Tarefa não encontrada'], 404);
        }

        return Response::json($task);
    }

    /**
     * GET /tasks/{column}/{value}
     */
    public function query(string $column, string $value): Response
    {
        $data = $this->repository->findBy($column, $value);
        return Response::json($data);
    }

      /**
     * POST /task
     */
    public function store(): Response
    {
        $data = $this->request->input();
        $created = $this->repository->create($data);

        if (!$created) {
            return Response::json([
                'error' => 'Failed to create task'
            ], 400);
        }
        return Response::json([
        'message' => 'Task created successfully'
    ], 201);
    }

    /**
     * PUT /task/{id}
     */
    public function update($id): Response
    {
        try {
            $data = $this->request->input();

            $this->repository->update($id, $data);

            return Response::json([
                'message' => 'Task updated successfully',
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
     * DELETE /tasks/{id}
     */
    public function destroy(string $id): Response
    {
        try {
            $this->repository->destroy($id);

            return Response::json([
                'message' => 'Tarefa removida com sucesso',
                'id' => $id
            ], 200);

        } catch (NotFoundException $e) {
            return Response::json(['error' => $e->getMessage()], 404);
        }
    }

    /**
     * PATCH /tasks/{id}/activate
     */
    public function activate(string $id): Response
    {
        try {
            $this->repository->activate($id);

            return Response::json([
                'message' => 'Tarefa ativada com sucesso',
                'id' => $id
            ], 200);

        } catch (NotFoundException $e) {
            return Response::json(['error' => $e->getMessage()], 404);
        }
    }
}
