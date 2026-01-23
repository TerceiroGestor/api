import { FormField, FormStep } from "@/shared/components/AppFrom/types";
import { PlaygroundData } from "./mock";

export const steps: FormStep<PlaygroundData>[] = [
  {
    id: "basic",
    label: "Dados básicos",
    fields: [
      {
        name: "name",
        label: "Nome",
        type: "text",
        required: true,
      },
      {
        name: "age",
        label: "Idade",
        type: "number",
      },
      {
        name: "active",
        label: "Ativo",
        type: "boolean",
      },
    ],
  },
  {
    id: "extra",
    label: "Informações extras",
    fields: [
      {
        name: "type",
        label: "Tipo",
        type: "select",
        options: [
          { label: "Admin", value: "admin" },
          { label: "Usuário", value: "user" },
        ],
      },
      {
        name: "description",
        label: "Descrição",
        type: "richtext",
      },
    ],
  },
];
