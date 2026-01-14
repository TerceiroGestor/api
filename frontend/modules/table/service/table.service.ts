import { TableRepository } from "../repository/table.respository"
import { DataTable } from "../types/table"

/**
 * Regra de negócio: listar pessoas
 */
export async function list(): Promise<DataTable[]> {
  return TableRepository.getAll()
}