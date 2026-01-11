'use client'

import { Box } from '@mui/material'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box display="flex">
      <Sidebar />

      <Box flex={1} display="flex" flexDirection="column">
        <Topbar />

        <Box p={3}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
