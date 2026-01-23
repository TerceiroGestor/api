"use server";

import { revalidatePath } from "next/cache";
import { api } from "@/shared/services/api";

export async function Show(id: string) {
  const res = await api(`/person/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  return res.json();
}


export async function Delete(contactId: string, personId: string) {
  await api(`/person/${personId}/contacts/${contactId}`, {
    method: "DELETE",
  });

  // Atualiza o perfil da pessoa
  revalidatePath(`/person/${personId}`);
}