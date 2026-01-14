'use client';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PersonAlert from './components/PersonAlert';
import TransitionAlerts from './components/TransitionAlerts';

export function PersonPage() {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
        <Button variant="contained">
            Hello world
        </Button>

        <PersonAlert />

        <TransitionAlerts/>

    </Box>
  );
}
