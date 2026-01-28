"use client";

import { useState } from "react";
import { Trash } from "lucide-react";
import { Button } from "./Button";
import { ConfirmDialog } from "../dialog/ConfirmDialog";

type DeleteButtonProps = {
  label?: string;
  description?: string;
  onConfirm: () => Promise<void> | void;
  onSuccess?: () => void;
  disabled?: boolean;
};

export function DeleteButton({
  label,
  description = "Tem certeza que deseja excluir este item?",
  onConfirm,
  onSuccess,
  disabled,
}: DeleteButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    try {
      setLoading(true);
      await onConfirm();
      onSuccess?.();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* BOTÃO */}
      <Button
        icon={<Trash size={16} />}
        label={label}
        variant="ghost"
        size="sm"
        disabled={disabled}
        action={{
          type: "callback",
          onClick: () => setOpen(true),
        }}
      />

      {/* DIALOG */}
      <ConfirmDialog
        open={open}
        title="Excluir"
        description={description}
        confirmLabel="Excluir"
        loading={loading}
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
