'use client'

import { Box } from '@mui/material'
import {
  DataGrid,
  DataGridProps,
} from '@mui/x-data-grid'
import { ptBR } from '@mui/x-data-grid/locales'

type AppDataGridProps = DataGridProps & {
  height?: number
}

export function AppDataGrid({
  height = 500,
  ...props
}: AppDataGridProps) {
  return (
    <Box sx={{ height, width: '100%' }}>
      <DataGrid
        showToolbar
        pageSizeOptions={[5, 10, 25]}
        localeText={
          ptBR.components.MuiDataGrid.defaultProps.localeText
        }
        {...props}
      />
    </Box>
  )
}