"use client";

import { useState } from "react";
import { Button } from "@/coreui/ui/button";
import { ConfirmDialog } from "@/coreui/ui/dialog/ConfirmDialog";
import { Trash } from "lucide-react";

interface DeleteButtonProps {
  onDelete: () => Promise<void>;
  onDeleted?: () => void;
  onError?: () => void;

  confirmTitle?: string;
  confirmDescription?: string;
}

export function DeleteButton({
  onDelete,
  onDeleted,
  onError,
  confirmTitle = "Excluir item",
  confirmDescription = "Tem certeza que deseja excluir este item?",
}: DeleteButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    try {
      setLoading(true);
      await onDelete();
      onDeleted?.();
      setOpen(false);
    } catch {
      onError?.();
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Button
        icon={<Trash size={16} />}
        variant="ghost"
        size="sm"
        action={{
          type: "callback",
          onClick: () => setOpen(true),
        }}
      />

      <ConfirmDialog
        open={open}
        title={confirmTitle}
        description={confirmDescription}
        confirmLabel="Excluir"
        loading={loading}
        onCancel={() => setOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
