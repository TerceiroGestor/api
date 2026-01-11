import { PeopleRepository } from '../repositories/people.repository'
import { Person } from '../types/person'

/**
 * Regra de negócio: listar pessoas
 */
export async function listPeople(): Promise<Person[]> {
  return PeopleRepository.getAll()
}

/**
 * Buscar pessoa por ID
 */
export async function getPersonById(id: number): Promise<Person> {
  return PeopleRepository.getById(id)
}

/**
 * Criar nova pessoa
 */
export async function createPerson(
  data: Partial<Person>
): Promise<Person> {
  return PeopleRepository.create(data)
}

/**
 * Atualizar pessoa
 */
export async function updatePerson(
  id: number,
  data: Partial<Person>
): Promise<Person> {
  return PeopleRepository.update(id, data)
}

/**
 * Remover pessoa
 */
export async function deletePerson(id: number): Promise<void> {
  await PeopleRepository.delete(id)
}
