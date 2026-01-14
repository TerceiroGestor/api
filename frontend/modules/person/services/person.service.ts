import { strict } from 'assert'
import { PersonRepository } from '../repositories/person.repository'
import { Person } from '../types/person'

export const PersonService = {

  /**
   * Regra de negócio: listar pessoas
   */
  async listPerson(): Promise<Person[]> {
    return PersonRepository.getAll()
  },

  /**
   * Buscar pessoa por ID
   */
  async getPersonById(id: string): Promise<Person> {
    return PersonRepository.getById(id)
  },

  /**
   * Criar nova pessoa
   */
  async createPerson(
    data: Partial<Person>
  ): Promise<Person> {
    return PersonRepository.create(data)
  },

  /**
   * Atualizar pessoa
   */
  async updatePerson(
    id: string,
    data: Partial<Person>
  ): Promise<Person> {
    return PersonRepository.update(id, data)
  },

  /**
   * Remover pessoa
   */
  async deletePerson(id: string[]): Promise<void> {
    await PersonRepository.delete(id)
  }

}
