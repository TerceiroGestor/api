"use client";

import { Modal } from "@/coreui/ui/modal/Modal";
import { FormEngine } from "@/coreui/form-engine";

import { fields, steps, taskInitialValues } from "./task.form";
import { createTask, updateTask } from "./task.service";
import { Task } from "./task.types";

type TaskModalProps = {
  open: boolean;
  task?: Task | null;
  onClose: () => void;
  onSuccess: (action: "create" | "update") => void;
};

export function TaskModal({ open, task, onClose, onSuccess }: TaskModalProps) {
  async function handleSubmit(values: any) {
    if (task) {
      await updateTask(task.id, values);
      onSuccess("update");
    } else {
      await createTask(values);
      onSuccess("create");
    }

    onClose();
  }

  return (
    <Modal size="lg" isOpen={open} onClose={onClose} title={task ? "Editar tarefa" : "Nova tarefa"}>
      <FormEngine
        fields={fields}
        steps={steps}
        initialValues={task ?? taskInitialValues}
        onSubmit={handleSubmit}
        actions={{
          cancel: {
            label: "Cancelar",
            onClick: onClose,
          },
          submit: {
            label: "Salvar",
          },
        }}
      />
    </Modal>
  );
}
