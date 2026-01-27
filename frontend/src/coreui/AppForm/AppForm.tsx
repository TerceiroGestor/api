// AppForm.tsx
import React from "react";
import { AppFormProps } from "./types";
import { FieldRenderer } from "./FieldRenderer";
import { StepHeader } from "./StepHeader";
import { Stack, Button } from "@mui/material";

export function AppForm<T>({ data, fields, steps, mode = "create", onSubmit }: AppFormProps<T>) {
  const [formData, setFormData] = React.useState<Partial<T>>(data ?? {});
  const [currentStep, setCurrentStep] = React.useState(0);

  const isStepper = !!steps;
  const isView = mode === "view";

  const activeFields = isStepper ? steps![currentStep].fields : fields!;

  function handleChange(name: keyof T, value: unknown) {
    if (isView) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isView || !onSubmit) return;
    onSubmit(formData as T);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        {isStepper && (
          <StepHeader steps={steps!.map((s) => ({ label: s.label }))} activeStep={currentStep} />
        )}

        {activeFields.map((field) => (
          <FieldRenderer
            key={String(field.name)}
            field={field}
            value={formData[field.name]}
            mode={mode}
            onChange={handleChange}
          />
        ))}

        <Stack direction="row" spacing={2}>
          {isStepper && currentStep > 0 && (
            <Button onClick={() => setCurrentStep((s) => s - 1)}>Voltar</Button>
          )}

          {isStepper && currentStep < steps!.length - 1 && (
            <Button variant="contained" onClick={() => setCurrentStep((s) => s + 1)}>
              Próximo
            </Button>
          )}

          {(!isStepper || currentStep === steps!.length - 1) && mode !== "view" && (
            <Button type="submit" variant="contained">
              {mode === "edit" ? "Atualizar" : "Salvar"}
            </Button>
          )}
        </Stack>
      </Stack>
    </form>
  );
}
