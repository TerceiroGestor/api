// fields/SelectField.tsx
import {
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";

interface SelectFieldProps {
  label: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export function SelectField({
  label,
  value,
  required,
  disabled,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard">{label}</InputLabel>
      <NativeSelect
        value={value}
        required={required}
        disabled={disabled}
        onChange={e => onChange(e.target.value)}
      >
        <option value="" />
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
