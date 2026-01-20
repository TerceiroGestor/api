'use client';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AlertColor } from '@mui/material/Alert';

interface AppAlertProps {
  open: boolean;
  severity: AlertColor;
  title?: string;
  message: string;
  onClose: () => void;
  autoHideDuration?: number;
}

export function AppAlert({
  open,
  severity,
  title,
  message,
  onClose,
  autoHideDuration = 4000,
}: AppAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={(_, reason) => {
        if (reason === 'clickaway') return;
        onClose();
      }}
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
