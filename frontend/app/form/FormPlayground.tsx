"use client";

import { useState } from "react";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AppForm } from "@/shared/components/AppFrom/AppFrom";
import { steps } from "./schema";
import { initialData, PlaygroundData } from "./mock";
import { FormMode } from "@/shared/components/AppFrom/types";

export default function FormPlayground() {
  const [mode, setMode] = useState<FormMode>("create");

  return (
    <Box p={4}>
      <Stack spacing={3}>
        {/* 🔄 Alternar modo */}
        <ToggleButtonGroup
          value={mode}
          exclusive
          onChange={(_, val) => val && setMode(val)}
        >
          <ToggleButton value="create">Create</ToggleButton>
          <ToggleButton value="edit">Edit</ToggleButton>
          <ToggleButton value="view">View</ToggleButton>
        </ToggleButtonGroup>

        {/* 🧪 AppForm */}
        <AppForm<PlaygroundData>
          mode={mode}
          steps={steps}
          initialData={mode === "create" ? {} : initialData}
          onSubmit={(data) => {
            console.log("SUBMIT:", data);
            alert("Veja o console 👀");
          }}
        />

        {/* Debug */}
        <Button
          variant="outlined"
          onClick={() => console.log("DATA:", initialData)}
        >
          Log initial data
        </Button>
      </Stack>
    </Box>
  );
}
