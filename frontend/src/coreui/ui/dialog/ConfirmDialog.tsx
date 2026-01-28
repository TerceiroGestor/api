"use client";

import { Modal } from "@/coreui/ui/modal/Modal";
import { Button } from "@/coreui/ui/button";

type ConfirmDialogProps = {
  open: boolean;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
};

export function ConfirmDialog({
  open,
  title = "Confirmação",
  description = "Tem certeza que deseja continuar?",
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  onConfirm,
  onCancel,
  loading,
}: ConfirmDialogProps) {
  return (
    <Modal title={title} isOpen={open} onClose={onCancel} size="sm">
      {/* HEADER */}
      

      {/* BODY */}
      <p className="text-sm text-gray-600">{description}</p>

      {/* FOOTER */}
      <div className="mt-6 flex justify-end gap-3">
        <Button
          label={cancelLabel}
          variant="secondary"
          action={{ type: "callback", onClick: onCancel }}
        />

        <Button
          label={confirmLabel}
          variant="danger"
          loading={loading}
          action={{ type: "callback", onClick: onConfirm }}
        />
      </div>
    </Modal>
  );
}
