import { Task } from "./task.types";

const api = process.env.NEXT_PUBLIC_API_URL
console.log(api);
if (!api) {
  throw new Error("NEXT_PUBLIC_API_URL não definida");
}

export async function listTasks(): Promise<Task[]> {
  const res = await fetch(`${api}/tasks`);

  if (!res.ok) {
    throw new Error("Erro ao buscar tarefas");
  }

  const data = await res.json();

  return data.map((task: any) => ({
    ...task,
    active: Boolean(task.active),
  }));
}


export async function createTask(data: Partial<Task>) {
  return fetch(`${api}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function updateTask(id: string, data: Partial<Task>) {
  return fetch(`${api}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export async function deleteTask(id: string): Promise<void> {
  const res = await fetch(`${api}/tasks/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Erro ao excluir tarefa");
  }
}
