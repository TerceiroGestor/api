// components/PersonHeader.tsx
"use client";

import { PersonProps } from "../../types";
import { Avatar, Stack, Typography, Chip } from "@mui/material";

export default function PersonHeader({ person }: { person: PersonProps }) {
  return (
    <Stack direction="row" spacing={3} alignItems="center">
      <Avatar sx={{ width: 72, height: 72 }}>{person.name[0]}</Avatar>

      <Stack spacing={0.5}>
        <Typography variant="h5" fontWeight={600}>
          {person.name} {person.lastname}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Chip
            label={person.active ? "Ativo" : "Inativo"}
            color={person.active ? "success" : "default"}
            size="small"
          />
          <Typography variant="caption" color="text.secondary">
            ID: {person.id}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
