<?php

declare(strict_types=1);

namespace Modules\Contact;

use Core\Http\Controller;
use Core\Http\Request;
use Core\Http\Response;
use Core\Exceptions\NotFoundException;
use Modules\Contact\ContactRepository;
use Modules\Person\PersonRepository;


final class ContactController extends Controller
{
    private ContactRepository $repository;
    private PersonRepository $persons;

    public function __construct(Request $request)
    {   
        parent::__construct($request);
        $this->repository = new ContactRepository();
        $this->persons  = new PersonRepository();
    }

    public function store(string $personId): Response
    {

        $data = $personId;
        
        if (!$this->persons->exists($personId)) {
            throw new NotFoundException('Pessoa não encontrada');
        }

        $data = $this->request->input();

        $contact = $this->repository->createForPerson($personId, $data);

        return Response::json($contact, 201);
    }


    /**
     * PUT /people/{id}
     */
    public function update(string $personId, string $contactId): Response
    {
        try {
            $data = $this->request->input();

            $this->repository->update($contactId, $data);

            return Response::json([
                'message' => 'Contato atualizado com sucesso',
                'id' => $contactId
            ], 200);

        } catch (\InvalidArgumentException $e) {
            return Response::json([
                'error' => $e->getMessage()
            ], 400);

        }
    }

    public function destroy(string $personId, string $contactId): Response
    {   
        try {
            
            $this->repository->destroy($contactId);

            return Response::json([
                'message' => 'Contato removido com sucesso',
                'id' => $contactId
            ], 200);

        } catch (NotFoundException $e) {
            return Response::json([
                'error' => $e->getMessage()
            ], 404);
        }
    }
}
