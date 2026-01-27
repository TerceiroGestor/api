// fields/SwitchField.tsx
import { FormControlLabel, Switch } from "@mui/material";

interface SwitchFieldProps {
  label: string;
  value: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}

export function SwitchField({
  label,
  value,
  disabled,
  onChange,
}: SwitchFieldProps) {
  return (
    <FormControlLabel
      label={label}
      control={
        <Switch
          checked={value}
          disabled={disabled}
          onChange={e => onChange(e.target.checked)}
        />
      }
    />
  );
}
