// components/RelativeList.tsx
"use client";
import { PersonProps } from "../../types";
import { RelativeProps } from "./relatives";
import { Typography, Stack, Chip } from "@mui/material";
import { People } from "@mui/icons-material";
import Link from "next/link";

export default function RelativeList({
  person,
  relatives,
}: {
  person: PersonProps;
  relatives: RelativeProps[];
}) {
  return (
    <>
      <Typography variant="subtitle1" fontWeight={600}>
        Composição Familiar
      </Typography>

      <Stack spacing={1}>
        {relatives?.map((r) => (
          <Stack
            key={r.relative_id}
            direction="row"
            spacing={1.5}
            alignItems="center"
          >
            <People fontSize="small" />
            <Typography>
              <Link
                href={`/person/${person.id}/relatives/${r.relative_id}?relationship=${encodeURIComponent(r.relationship)}`}
              >
                {r.name} {r.lastname}
              </Link>
            </Typography>
            <Chip label={r.relationship} size="small" color="info" />
          </Stack>
        ))}
      </Stack>
    </>
  );
}
