'use client'

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export function Topbar() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Toolbar>
        {/* Título da página (pode virar dinâmico depois) */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        {/* Área do usuário */}
        <Box>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
