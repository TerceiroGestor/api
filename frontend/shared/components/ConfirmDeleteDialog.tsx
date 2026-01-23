"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface Props {
  open: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmDeleteDialog({
  open,
  title = "Confirmar exclusão",
  description = "Essa ação não pode ser desfeita.",
  onConfirm,
  onClose,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <Typography>{description}</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>

        <Button color="error" variant="contained" onClick={onConfirm}>
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
}
