// fields/TextField.tsx
import { TextField as MuiTextField } from "@mui/material";

interface TextFieldProps {
  label: string;
  value: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
}

export function TextField({
  label,
  value,
  disabled,
  required,
  onChange,
}: TextFieldProps) {
  return (
    <MuiTextField
      fullWidth
      label={label}
      value={value}
      required={required}
      disabled={disabled}
      onChange={e => onChange(e.target.value)}
    />
  );
}
