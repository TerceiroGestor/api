"use client";

import { Button, Stack } from "@mui/material";
import { JSX } from "@emotion/react/jsx-runtime";

export interface CrudToolbarProps {
  onAdd: () => void;
  onRefresh?: () => void;
}

export function CrudToolbar({
  onAdd,
  onRefresh
}: CrudToolbarProps): JSX.Element {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
      <Button variant="contained" onClick={onAdd}>
        Novo
      </Button>

      {onRefresh && (
        <Button variant="outlined" onClick={onRefresh}>
          Atualizar
        </Button>
      )}
    </Stack>
  );
}
