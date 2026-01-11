'use client'

import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import { ptBR } from '@mui/x-data-grid/locales'

export function AppDataGrid(props: DataGridProps) {
  return (
    <DataGrid
      {...props}
      localeText={
        ptBR.components?.MuiDataGrid?.defaultProps?.localeText
      }
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10, 25, 50]}
    />
  )
}
