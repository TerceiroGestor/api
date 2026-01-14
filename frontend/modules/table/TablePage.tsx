'use client'

import { useEffect, useState } from 'react'
import { AppDataGrid } from '@/shared/components/AppDataGrid/AppDataGrid'
import { useTableColumns } from './components/TableGrid'
import { list } from './service/table.service'
import { DataTable } from './types/table'

export default function TablePage() {
  const [rows, setRows] = useState<DataTable[]>([])
  const [loading, setLoading] = useState(true)

  const columns = useTableColumns()

  useEffect(() => {
    list().then((data) => {
      setRows(data)
      setLoading(false)
    })
  }, [])

  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      checkboxSelection
    />
  )
}
