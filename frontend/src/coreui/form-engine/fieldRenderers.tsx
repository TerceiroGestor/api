import React from "react";
import { FormField } from "./types";

import { InputDefault, InputMoney, InputCPF } from "@coreui/ui/inputs";
import { Toggle } from "@/coreui/ui/check";
import { Select, MultiSelect } from "@/coreui/ui/select";
import { RichText } from "@/coreui/ui/richtext/RichText";

interface FieldRendererProps<T = any> {
  field: FormField<T>;
  value: any;
  disabled?: boolean;
  onChange: (value: any) => void;
}

function normalizeChange(onChange: (value: any) => void) {
  return (arg: any) => {
    // Caso seja evento do React
    if (arg && arg.target) {
      onChange(arg.target.value);
      return;
    }

    // Caso já seja valor
    onChange(arg);
  };
}

export function FieldRenderer<T>({ field, value, disabled, onChange }: FieldRendererProps<T>) {
  const isDisabled = disabled || field.disabled;
  const handleChange = normalizeChange(onChange);

  switch (field.type) {
    case "text":
    case "number":
      return (
        <InputDefault
          value={value}
          placeholder={"placeholder" in field ? field.placeholder : undefined}
          disabled={isDisabled}
          onChange={handleChange}
        />
      );

    case "money":
      return <InputMoney value={value} disabled={isDisabled} onChange={handleChange} />;

    case "cpf":
      return <InputCPF value={value} disabled={isDisabled} onChange={handleChange} />;

    case "boolean":
      return (
        <Toggle label={field.label} value={value} disabled={isDisabled} onChange={handleChange} />
      );

    case "select":
      return (
        <Select
          value={value}
          options={field.options}
          disabled={isDisabled}
          onChange={handleChange}
        />
      );

    case "multiselect":
      return (
        <MultiSelect
          value={value}
          options={field.options}
          disabled={isDisabled}
          onChange={handleChange}
        />
      );

    case "richtext":
      return <RichText value={value} disabled={isDisabled} onChange={handleChange} />;

    default:
      return null;
  }
}
