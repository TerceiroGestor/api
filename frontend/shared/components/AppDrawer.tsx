"use client";

import { Drawer, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface AppDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  width?: number;
  children: ReactNode;
}

export default function AppDrawer({
  open,
  onClose,
  title,
  width = 360,
  children,
}: AppDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width, p: 3 }}>
        {title && (
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
        )}

        {children}
      </Box>
    </Drawer>
  );
}
