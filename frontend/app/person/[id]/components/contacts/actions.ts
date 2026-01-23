"use server";

import { revalidatePath } from "next/cache";
import { api } from "@/shared/services/api";

export async function SaveContact(
  personId: string,
  contactId: string | null,
  formData: FormData
): Promise<void> {

  const payload = {
    type: formData.get("type"),
    number: formData.get("number"),
    main: formData.get("main")
  };

  if (contactId) {
    await api(`/person/${personId}/contacts/${contactId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
  } else {
    await api(`/person/${personId}/contacts`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
  }

  revalidatePath(`/person/${personId}`);
}

export async function DeleteContact(contactId: string, personId: string) {
  await api(`/person/${personId}/contacts/${contactId}`, {
    method: "DELETE",
  });

  // Atualiza o perfil da pessoa
  revalidatePath(`/person/${personId}`);
}