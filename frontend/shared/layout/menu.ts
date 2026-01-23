import PeopleIcon from '@mui/icons-material/People'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { FormIcon } from 'lucide-react'

export const menuItems = [
  {
    label: 'Dashboard',
    path: '/',
    icon: DashboardIcon,
  },
  {
    label: 'Pessoas',
    path: '/person',
    icon: PeopleIcon,
  },
  {
    label: 'Formulário',
    path: '/form',
    icon: FormIcon,
  },
]
