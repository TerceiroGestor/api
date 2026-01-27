// fields/NumberField.tsx
import { TextField } from "@mui/material";

interface NumberFieldProps {
  label: string;
  value: number;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: boolean) => void;
}

export function NumberField({
  label,
  value,
  disabled,
  required,
  onChange,
}: NumberFieldProps) {
  return (
    <TextField
      fullWidth
      type="number"
      label={label}
      value={value}
      required={required}
      disabled={disabled}
      onChange={e => onChange(Boolean(e.target.value))}
    />
  );
}
