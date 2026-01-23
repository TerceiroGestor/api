import AppDrawer from "@/shared/components/AppDrawer";
import PersonForm from "./PersonForm";
import { PersonsProps } from "../types";

interface Props {
  open: boolean;
  onClose: () => void;
  person: PersonsProps;
}

export default function PersonDrawer({ open, onClose, person }: Props) {
  return (
    <AppDrawer
      open={open}
      onClose={onClose}
      title={person ? "Editar Pessoa" : "Nova Pessoa"}
    >
      <PersonForm person={person} />
    </AppDrawer>
  );
}
