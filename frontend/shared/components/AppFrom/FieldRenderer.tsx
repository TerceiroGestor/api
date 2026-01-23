// FieldRenderer.tsx
import { Stack } from "@mui/material";
import { fieldRenderers } from "./FieldRendererMap";
import { FormField, FormMode, FieldType } from "./types";

interface Props<T> {
  field: FormField<T>;
  value: unknown;
  mode: FormMode;
  onChange: (name: keyof T, value: unknown) => void;
}

export function FieldRenderer<T>({
  field,
  value,
  mode,
  onChange,
}: Props<T>) {
  if (mode === "view" && field.hideOnView) return null;

  const Renderer = fieldRenderers[field.type as FieldType];

  if (!Renderer) return null;

  return (
    <Stack spacing={1}>
      <Renderer
        field={field}
        value={value}
        mode={mode}
        onChange={onChange}
      />
    </Stack>
  );
}
