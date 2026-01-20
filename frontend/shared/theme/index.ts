import { createTheme } from '@mui/material/styles'
import { ptBR as materialPtBR } from '@mui/material/locale'

import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'

export const theme = createTheme(
  {
    palette,
    typography,
    components,
  }, 
  materialPtBR
);
