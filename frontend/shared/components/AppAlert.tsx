// shared/components/AppAlert.tsx
'use client'

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { AlertColor } from '@mui/material/Alert';

interface AppAlertProps {
  severity: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  open?: boolean;
  onClose?: () => void;
  autoHideDuration: number;
}
export function AppAlert({
  severity,
  title,
  message,
  open,
  onClose,
  autoHideDuration = 0,
}: AppAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration || undefined}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        severity={severity}
        onClose={onClose}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
}