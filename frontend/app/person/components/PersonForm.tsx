"use client";

import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Update } from "../[id]/actions";
import { PersonsProps } from "../types";

interface Props {
  person: PersonsProps | null;
}

export default function EditPersonPage({ person }: Props) {
  if (!person) {
    return <p>Pessoa não encontrada</p>;
  }

  return (
    <div>
      <form action={Update.bind(null, person.id)} className="space-y-4">
        <Stack spacing={2}>
          <TextField
            label="Nome"
            name="name"
            defaultValue={person.name}
            variant="standard"
            size="small"
            margin="normal"
          ></TextField>

          <TextField
            label="Sobrenome"
            name="lastname"
            defaultValue={person.lastname}
            variant="standard"
            size="small"
            margin="normal"
          ></TextField>

          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Ativo</InputLabel>
            <Select
              label="Ativo"
              name="active"
              defaultValue={String(person.active)}
            >
              <MenuItem value={1}>Ativo</MenuItem>
              <MenuItem value={0}>Inativo</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" color="info">
            Salvar
          </Button>
        </Stack>
      </form>
    </div>
  );
}
