"use client";

import {
  Switch,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

interface BooleanSwitchProps {
  name: string;
  label: string;
  defaultValue?: boolean;
  helperText?: string;
  disabled?: boolean;
}

export default function BooleanSwitch({
  name,
  label,
  defaultValue = false,
  helperText,
  disabled = false,
}: BooleanSwitchProps) {
  const [checked, setChecked] = useState(Boolean(defaultValue));

  return (
    <FormControl>
      {/* valor real enviado */}
      <input
        type="hidden"
        name={name}
        value={checked ? "1" : "0"}
      />

      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            disabled={disabled}
          />
        }
        label={label}
      />

      {helperText && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
