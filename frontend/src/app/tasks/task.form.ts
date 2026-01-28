import { FormField, FormStep } from "@/coreui/form-engine";

export const fields: FormField[] = [
  { name: "title", label: "Título", type: "text" },
  { name: "description", label: "Descrição", type: "richtext" },
  { name: "due_date", label: "Data", type: "date" },
  { name: "budget", label: "Orçamento", type: "money" },
  { name: "active", label: "Ativo", type: "boolean", persistAs: "number" },
];

export const steps: FormStep[] = [
  {
    title: "Descrição",
    fields: ["title", "description"],
  },
  {
    title: "Informações",
    fields: ["due_date", "budget", "active"],
  },
];

export const taskInitialValues = {
  title: "",
  description: "",
  due_date: "",
  budget: null,
  active: true,
};
