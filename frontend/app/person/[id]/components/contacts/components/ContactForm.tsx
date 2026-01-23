import { AppForm } from "@/shared/components/AppFrom/AppFrom";
import { contactStep } from "./ContactField";
import { ContactProps } from "../types";
import { SaveContact } from "../actions";

interface Props {
  onClose: () => void;
  personId: string;
  contact: ContactProps | null;
}

export default function ContactForm({
  onClose,
  personId,
  contact,
}: Props) {

  async function handleSubmit(data: ContactProps) {

    await SaveContact(
      personId,
      contact?.id ?? null,
      data
    );
    onClose();
  }

  return (
    <AppForm<ContactProps>
      data={contact ?? undefined}
      steps={contactStep}
      mode={contact ? "edit" : "create"}
      onSubmit={handleSubmit}
    />
  );
}
