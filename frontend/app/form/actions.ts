"use server";

import { revalidatePath } from "next/cache";
import { api } from "@/shared/services/api";

export interface FormInput{
  number: string;
  type: "Celular" | "Telefone" | "WhatsApp";
  main: 0 | 1;
  active: 0 | 1;
}

export async function SaveForm(
  personId: string,
  formId: string | null,
  data: FormInput
): Promise<void> {

  const endpoint = formId
    ? `/person/${personId}/Forms/${formId }`
    : `/person/${personId}/Forms`;

  const method = formId ? "PUT" : "POST";

  await api(endpoint, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  revalidatePath(`/person/${personId}`);
}

export async function DeleteForm(formId: string, personId: string) {
  await api(`/person/${personId}/Forms/${formId }`, {
    method: "DELETE",
  });

  // Atualiza o perfil da pessoa
  revalidatePath(`/person/${personId}`);
}