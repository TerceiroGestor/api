import { useMemo } from 'react'
import { GridColDef } from '@mui/x-data-grid'
import { quickFilterSameYear } from '@/shared/components/AppDataGrid/quickFilters'
import { DataTable } from '../types/table'

export function useTableColumns(): GridColDef<DataTable>[] {
  return useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Nome',
        flex: 1,
        getApplyQuickFilterFn: () => null,
      },
      {
        field: 'lastname',
        headerName: 'Sobrenome',
        flex: 1,
      },
      {
        field: 'created_at',
        headerName: 'Criado',
        flex: 1,
        valueFormatter: (value) =>
          value
            ? new Date(value as string).toLocaleDateString('pt-BR')
            : '',
        getApplyQuickFilterFn: quickFilterSameYear,
      },
      {
        field: 'active',
        headerName: 'Ativo',
        flex: 1,
        type: 'boolean',
      },
    ],
    [],
  )
}
