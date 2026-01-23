export interface FormProps {
  id: string;
  person_id: string;
  number: string;
  type: "Celular" | "Telefone" | "WhatsApp";
  main: 0 | 1;
  active: 0 | 1;
  created: string;
  updated: string;
  summary: string
}
