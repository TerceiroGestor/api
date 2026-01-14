import { api } from '@/shared/services/api';
import { DataTable } from '@/modules/table/types/table'

export const TableRepository = {
    getAll(): Promise<DataTable[]> {
        return api<DataTable[]>('/person');
    },
}