"use client";

import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import ConfirmDeleteDialog from "@/shared/components/ConfirmDeleteDialog";

import ContactList from "./ContactList";
import ContactDrawer from "./ContactDrawer";
import { ContactProps } from "../types";
import { DeleteContact } from "../actions";

interface Props {
  personId: string;
  contacts: ContactProps[];
}

export default function ContactSection({ personId, contacts }: Props) {
  const [open, setOpen] = useState(false);

  const [editingContact, setEditingContact] = useState<ContactProps | null>(
    null,
  );

  // 🔹 Delete dialog
  const [deleteContactState, setDeleteContactState] =
    useState<ContactProps | null>(null);

  function handleNew() {
    setEditingContact(null);
    setOpen(true);
  }

  function handleEdit(contact: ContactProps) {
    setEditingContact(contact);
    setOpen(true);
  }

  function handleDelete(contact: ContactProps) {
    setDeleteContactState(contact);
  }

  // ✅ Confirmar exclusão
  async function handleConfirmDelete() {
    if (!deleteContactState) return;

    await DeleteContact(deleteContactState.id, personId);

    setDeleteContactState(null);
  }

  return (
    <>
      <Stack spacing={2}>
        {/* 🔹 Título + Botão */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">Contatos</Typography>

          <Button size="small" variant="contained" onClick={handleNew}>
            Novo contato
          </Button>
        </Stack>

        {/* 🔹 Lista */}
        <ContactList
          contacts={contacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Stack>

      {/* 🔹 Drawer */}
      <ContactDrawer
        open={open}
        onClose={() => setOpen(false)}
        personId={personId}
        contact={editingContact}
      />

      {deleteContactState && (
        <ConfirmDeleteDialog
          open={!!deleteContactState}
          title="Excluir contato"
          description={`Deseja excluir o contato ${deleteContactState?.number}?`}
          onClose={() => setDeleteContactState(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}
