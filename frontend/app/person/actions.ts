"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { api } from "@/shared/services/api";

export async function FindAll() {
  const res = await api("/person", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
}

export async function Show(id: string) {
  const res = await api(`/person/${id}`, {
    method: "GET",
    cache: "no-store",
  });
  return res.json();
}

export async function Create(formData: FormData){
  const payload = {
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    active: Number(formData.get("active")),
  };

  await api("/person", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  revalidatePath("/person");
  redirect("/person");

}

export async function Update(id: string, formData: FormData) {
  const payload = {
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    active: Number(formData.get("active")),
  };

  await api(`/person/${id}`, {
    method: "PUT", // ou PUT, conforme seu backend
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  revalidatePath("/person");
  redirect("/person");
}

export async function Delete(id: string) {

  await api(`/person/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/person");
  redirect("/person");
}
