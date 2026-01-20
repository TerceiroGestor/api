// components/ContactList.tsx
"use client";

import { ContactProps } from "../../types";
import { Phone, Star } from "@mui/icons-material";
import { Stack, Chip, Typography } from "@mui/material";

export default function ContactList({ contacts }: { contacts: ContactProps[] }) {
  return (
    <>
      <Typography variant="subtitle1" fontWeight={600}>
        Contatos
      </Typography>

      <Stack spacing={1}>
        {contacts.map((c) => (
          <Stack
            key={c.id}
            direction="row"
            spacing={1.5}
            alignItems="center"
          >
            <Phone fontSize="small" />
            <Typography>{c.number}</Typography>
            <Chip label={c.type} size="small" />
            {c.main === 1 && <Star fontSize="small" color="warning" />}
          </Stack>
        ))}
      </Stack>
    </>
  );
}
