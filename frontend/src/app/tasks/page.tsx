"use client";

import { useEffect, useState } from "react";
import { Button, DeleteButton } from "@/coreui/ui/button";
import { Task } from "./task.types";
import { listTasks, deleteTask } from "./task.service";
import { TaskModal } from "./task.modal";
import { PlusIcon, Edit, Trash } from "lucide-react";
import { ConfirmDialog } from "@/coreui/ui/dialog/ConfirmDialog";
import { AlertToast } from "@/coreui/ui/alert/AlertToast";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Task | null>(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [deleting, setDeleting] = useState();

  const [alert, setAlert] = useState<{
    variant: "success" | "error";
    title: string;
    message: string;
  } | null>(null);

  /* ======================================================
   * LOAD
   * ====================================================== */
  async function reloadTasks() {
    const data = await listTasks();
    setTasks(data);
  }

  useEffect(() => {
    let mounted = true;

    (async () => {
      const data = await listTasks();
      if (mounted) setTasks(data);
    })();

    return () => {
      mounted = false;
    };
  }, []);

  /* ======================================================
   * RENDER
   * ====================================================== */
  return (
    <>
      {/* HEADER */}
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Tarefas</h1>

        <Button
          label="Nova tarefa"
          icon={<PlusIcon />}
          action={{
            type: "callback",
            onClick: () => {
              setSelected(null);
              setOpen(true);
            },
          }}
        />
      </header>

      {/* LIST */}
      {tasks.map((task) => (
        <div key={task.id} className="mb-2 flex items-center justify-between rounded-md border p-3">
          <span>{task.title}</span>

          <div className="flex gap-1">
            <Button
              icon={<Edit size={16} />}
              variant="ghost"
              size="sm"
              action={{
                type: "callback",
                onClick: () => {
                  setSelected(task);
                  setOpen(true);
                },
              }}
            />

            <DeleteButton
              onDelete={() => deleteTask(task.id)}
              onDeleted={() => {
                reloadTasks();
                setAlert({
                  variant: "success",
                  title: "Tarefa removida",
                  message: "A tarefa foi excluída com sucesso.",
                });
              }}
              onError={() =>
                setAlert({
                  variant: "error",
                  title: "Erro",
                  message: "Não foi possível excluir a tarefa.",
                })
              }
            />
          </div>
        </div>
      ))}

      {/* CREATE / EDIT MODAL */}
      <TaskModal
        open={open}
        task={selected}
        onClose={() => setOpen(false)}
        onSuccess={(action) => {
          reloadTasks();

          if (action === "create") {
            setAlert({
              variant: "success",
              title: "Tarefa criada",
              message: "A tarefa foi criada com sucesso.",
            });
          }

          if (action === "update") {
            setAlert({
              variant: "success",
              title: "Tarefa atualizada",
              message: "As alterações foram salvas com sucesso.",
            });
          }
        }}
      />

      {/* ALERT */}
      {alert && (
        <div className="fixed right-6 bottom-6 z-[9999]">
          <AlertToast
            variant={alert.variant}
            title={alert.title}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        </div>
      )}
    </>
  );
}
