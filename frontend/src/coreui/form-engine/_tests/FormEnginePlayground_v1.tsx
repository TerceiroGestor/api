"use client";

import { FormEngine } from "@/coreui/form-engine/FormEngine";
import { FormField, FormStep } from "@/coreui/form-engine/types";

type PlaygroundFormData = {
  name: string;
  age: number;
  cpf: string;
  money: number;
  active: boolean;
  role: string;
  tags: string[];
  description: string;
};

export default function FormEnginePlaygroundV1() {
  /* ======================================================
   * FIELDS
   * ====================================================== */

  const fields: FormField<PlaygroundFormData>[] = [
    { name: "name", label: "Nome", type: "text", placeholder: "Digite o nome" },
    { name: "age", label: "Idade", type: "number" },
    { name: "cpf", label: "CPF", type: "cpf" },
    { name: "money", label: "Renda", type: "money" },
    { name: "active", label: "Ativo", type: "boolean" },
    {
      name: "role",
      label: "Cargo",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
    {
      name: "tags",
      label: "Tags",
      type: "multiselect",
      options: [
        { label: "A", value: "a" },
        { label: "B", value: "b" },
      ],
    },
    {
      name: "description",
      label: "Descrição",
      type: "richtext",
    },
  ];

  /* ======================================================
   * STEPS
   * ====================================================== */

  const steps: FormStep[] = [
    {
      title: "Dados pessoais",
      fields: ["name", "age", "cpf", "active"],
    },
    {
      title: "Financeiro",
      fields: ["money", "role", "tags"],
    },
    {
      title: "Descrição",
      fields: ["description"],
    },
  ];

  /* ======================================================
   * EDIT MODE (mock)
   * ====================================================== */

  const initialValues: Partial<PlaygroundFormData> = {
    name: "João da Silva",
    age: 32,
    cpf: "15515515555",
    money: 4500.75,
    active: true,
    role: "admin",
    tags: ["a", "b"],
    description: "<h1>Texto inicial vindo da API</h1><pre><code>teajugmsaf</code></pre><p></p>",
  };

  /* ======================================================
   * SUBMIT
   * ====================================================== */

  function handleSubmit(values: PlaygroundFormData) {
    console.log("SUBMIT FINAL →", values);
  }

  /* ======================================================
   * RENDER
   * ====================================================== */

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <h1 className="text-xl font-semibold">FormEngine Playground v1</h1>

      <FormEngine
        fields={fields}
        steps={steps}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
