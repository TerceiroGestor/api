// contact.steps.ts
import { FormStep } from "@/shared/components/AppFrom/types";
import { ContactProps } from "../types";

/**
 * { 
    id: "type",
    label: "Tipo",
    fields: [
      {
        name: "type",
        label: "Tipo",
        type: "select",
        required: true,
        options: [
          { label: "Celular", value: "Celular" },
          { label: "Telefone", value: "Telefone" },
          { label: "WhatsApp", value: "WhatsApp" },
        ],
      },
    ],
  },
  { 
    id: "number",
    label: "Número",
    fields: [
      {
        name: "number",
        label: "Contato",
        type: "text",
        required: true,
      },
    ],
  },
  { 
    id: "main",
    label: "Principal",
    fields: [
      {
        name: "main",
        label: "Contato principal",
        type: "boolean",
      },
    ],
  },
  { 
    id: "main",
    label: "Teste",
    fields: [
      {
        name: "main",
        label: "Contato principal",
        type: "boolean",
      },
    ],
  },
 */

export const contactStep: FormStep<ContactProps>[] = [

  { 
    id: "type",
    label: "Tipo",
    fields: [
      {
        name: "type",
        label: "Tipo",
        type: "select",
        required: true,
        options: [
          { label: "Celular", value: "Celular" },
          { label: "Telefone", value: "Telefone" },
          { label: "WhatsApp", value: "WhatsApp" },
        ],
      },
    ],
  },
  { 
    id: "number",
    label: "Número",
    fields: [
      {
        name: "number",
        label: "Contato",
        type: "text",
        required: true,
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
        name: "main",
        label: "Descrição",
        type: "richtext",
      },
    ],
  },
];
