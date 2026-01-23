// components/ContactList.tsx
"use client";

import { ContactProps } from "./types";
import { CheckCircleOutline, DeleteForever, EditSquare} from "@mui/icons-material";
import { Stack, Typography, IconButton } from "@mui/material";

interface Props {
  contacts: ContactProps[];
  onEdit?: (contact: ContactProps) => void;
  onDelete?: (contact: ContactProps) => void;
}

export default function ContactList({ contacts, onEdit, onDelete }: Props) {
  return (
    <>
      <Stack spacing={1}>
        {contacts.map((contact) => (
          <Stack
            key={contact.id}
            direction="row"
            spacing={1.5}
            alignItems="center"
          >
            <Typography>{contact.number}</Typography>

            {contact.main === true && (
              <CheckCircleOutline fontSize="small" color="success" />
            )}

            {onEdit && (
              <IconButton size="small" onClick={() => onEdit(contact)}>
                <EditSquare fontSize="small" color="info"/>
              </IconButton>
            )}

            {onDelete && (
              <IconButton size="small" onClick={() => onDelete(contact)}>
                <DeleteForever fontSize="small" color="warning" />
              </IconButton>
            )}

            

          </Stack>
        ))}
      </Stack>
    </>
  );
}
