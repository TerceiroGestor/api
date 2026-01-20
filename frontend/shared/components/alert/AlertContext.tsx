'use client';

import { createContext, useContext, useState } from 'react';
import { AlertColor } from '@mui/material/Alert';
import { AppAlert } from './AppAlert';

interface AlertState {
  open: boolean;
  severity: AlertColor;
  title?: string;
  message: string;
}

interface AlertContextType {
  success: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<AlertState>({
    open: false,
    severity: 'info',
    title: '',
    message: '',
  });

  function close() {
    setAlert(prev => ({ ...prev, open: false }));
  }

  function show(
    severity: AlertColor,
    message: string,
    title?: string
  ) {
    setAlert({
      open: true,
      severity,
      title,
      message,
    });
  }

  const value: AlertContextType = {
    success: (msg, title = 'Sucesso') =>
      show('success', msg, title),
    error: (msg, title = 'Erro') =>
      show('error', msg, title),
    warning: (msg, title = 'Atenção') =>
      show('warning', msg, title),
    info: (msg, title = 'Informação') =>
      show('info', msg, title),
  };

  return (
    <AlertContext.Provider value={value}>
      {children}

      <AppAlert
        open={alert.open}
        severity={alert.severity}
        title={alert.title}
        message={alert.message}
        onClose={close}
      />
    </AlertContext.Provider>
  );
}

export { AlertContext };