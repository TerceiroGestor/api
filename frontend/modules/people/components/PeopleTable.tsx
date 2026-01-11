'use client'

import { useEffect, useState } from 'react'
import { GridColDef} from '@mui/x-data-grid'
import { AppDataGrid } from '@/shared/components/AppDataGrid'
import { listPeople } from '../services/people.service'
import { Person } from '../types/person'

export function PeopleTable() {
  const [rows, setRows] = useState<Person[]>([])

  useEffect(() => {
    listPeople().then(setRows)
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'lastname', headerName: 'Sobrenome', flex: 1 },
  ]

  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      autoHeight
    />
  )
}
