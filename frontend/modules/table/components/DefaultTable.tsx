'use client'

import { useEffect, useMemo, useState } from 'react'
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GetApplyQuickFilterFn} from '@mui/x-data-grid';
import { list } from '../service/table.service'
import { DataTable } from '../types/table'
import { ptBR } from '@mui/x-data-grid/locales';


export function TableTable() {
    
    const [rows, setRows] = useState<DataTable[]>([])
    const [loading, setLoading] = useState(true)

    const getApplyQuickFilterFnSameYear: GetApplyQuickFilterFn<
        any,
        unknown
        > = (value) => {
        if (!value || value.length !== 4 || !/\d{4}/.test(value)) {
            return null
        }

        return (cellValue) => {
            if (cellValue instanceof Date) {
                return cellValue.getFullYear() === Number(value);
            }
            return false;
        };
    }


    useEffect(() => {
        list().then((data) => {
        setRows(data)
        setLoading(false)
        })
    }, [])

    const columns: GridColDef[] = useMemo(
        () => [
        {
            field: 'name',
            headerName: 'Nome',
            flex: 1,
            // Exemplo: desabilita quick filter nesse campo
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
            valueGetter: (value) => new Date(value),
            getApplyQuickFilterFn: getApplyQuickFilterFnSameYear,
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
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        showToolbar
        localeText={
            ptBR.components.MuiDataGrid.defaultProps.localeText
        }
      />
    </Box>
  )
}