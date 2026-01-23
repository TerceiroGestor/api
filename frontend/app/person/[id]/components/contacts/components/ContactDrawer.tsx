"use client";

import AppDrawer from "@/shared/components/AppDrawer";
import ContactForm from "./ContactForm";
import { ContactProps } from "../types";

interface Props {
  open: boolean;
  onClose: () => void;
  personId: string;
  contact: ContactProps | null;
}

export default function ContactDrawer({
  open,
  onClose,
  personId,
  contact,
}: Props) {
  return (
    <AppDrawer
      open={open}
      onClose={onClose}
      title={contact ? "Editar Contato" : "Novo Contato"}
    >
      <ContactForm
        onClose={onClose}
        personId={personId}
        contact={contact}
      />
      
    </AppDrawer>
  );
}
