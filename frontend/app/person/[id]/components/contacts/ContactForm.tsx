import { Box, TextField, Button, Stack } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import { ContactProps } from "./types";
import { SaveContact } from "./actions";
import BooleanSwitch from "@/shared/components/AppSwitch";

interface Props {
  onClose: () => void;
  personId: string;
  contact: ContactProps | null;
}

export default function ContactForm({ onClose, personId, contact }: Props) {
  return (
    <>
      <form
        action={async (formData) => {
          await SaveContact(personId, contact?.id ?? null, formData);
          onClose();
        }}
      >
        <Stack spacing={2}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Tipo
              </InputLabel>
              <NativeSelect
                defaultValue={contact?.type ?? ""}
                name="type"
                required
              >
                <option value={"Celular"}>Celular</option>
                <option value={"Telefone"}>Telefone</option>
                <option value={"WhatsApp"}>WhatsApp</option>
              </NativeSelect>
            </FormControl>
          </Box>

          <TextField
            name="number"
            label="Contato"
            variant="standard"
            defaultValue={contact?.number ?? ""}
            required
          />

          <BooleanSwitch
            name="main"
            label="Contato principal"
            defaultValue={contact?.main}
            helperText="Define qual contato será usado como padrão"
          />

          <Button type="submit" variant="contained">
            Salvar
          </Button>
        </Stack>
      </form>
    </>
  );
}
