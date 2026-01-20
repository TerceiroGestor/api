'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { menuItems } from './menu'

const SIDEBAR_WIDTH = 240

export function Sidebar() {
  const pathname = usePathname()

  return (
    <Box
      width={SIDEBAR_WIDTH}
      height="100vh"
      borderRight="1px solid"
      borderColor="divider"
      display="flex"
      flexDirection="column"
    >
      {/* Logo / Título */}
      <Box p={2}>
        <Typography variant="h6">TerceiroGestor</Typography>
      </Box>

      {/* Menu */}
      <List>
        {menuItems.map((item) => {
          const Icon = item.icon
          const selected = pathname === item.path

          return (
            <ListItemButton
              key={item.path}
              component={Link}
              href={item.path}
              selected={selected}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          )
        })}
      </List>
    </Box>
  )
}
