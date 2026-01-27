// FieldRendererMap.ts
import { FormField, FormMode } from "./types";
import { TextField } from "./fields/TextField";
/**import { TextareaAutosize } from "@mui/material";*/
import { NumberField } from "./fields/NumberField";
import { SwitchField } from "./fields/SwitchField";
import { SelectField } from "./fields/SelectField";
import { RichTextField } from "./fields/RichTextField/RichTextField";

import { toStringValue, toNumberValue, toChecked, toBooleanLike } from "./utils";

export interface FieldRendererProps<T> {
  field: FormField<T>;
  value: unknown;
  mode: FormMode;
  onChange: (name: keyof T, value: unknown) => void;
}

export const fieldRenderers = {
  text: <T,>({ field, value, mode, onChange }: FieldRendererProps<T>) => (
    <TextField
      label={field.label}
      value={toStringValue(value)}
      required={field.required}
      disabled={mode === "view"}
      onChange={(val) => onChange(field.name, val)}
    />
  ),

  /**
   * 
   * @param param0 
   * @returns 
   * 
   * textarea: <T,>({ field, value, mode, onChange }: FieldRendererProps<T>) => (
    <TextareaAutosize
      value={toStringValue(value)}
      required={field.required}
      disabled={mode === "view"}
      maxRows={field.rows ?? 4}
      onChange={(val) => onChange(field.name, val)}
      placeholder="Escrever..."
      //defaultValue="default"
      //style={{ width: 200 }}
    />
  ),
   */

  richtext: <T,>({ field, value, mode, onChange }: FieldRendererProps<T>) => (
    <RichTextField
      value={toStringValue(value)}
      disabled={mode === "view"}
      onChange={(val) => onChange(field.name, val)}
    />
  ),

  number: <T,>({ field, value, mode, onChange }: FieldRendererProps<T>) => (
    <NumberField
      label={field.label}
      value={toNumberValue(value)}
      required={field.required}
      disabled={mode === "view"}
      onChange={(val) => onChange(field.name, val)}
    />
  ),

  select: <T,>({ field, value, mode, onChange }: FieldRendererProps<T>) => (
    <SelectField
      label={field.label}
      value={toStringValue(value)}
      required={field.required}
      disabled={mode === "view"}
      options={field.options ?? []}
      onChange={(val) => onChange(field.name, val)}
    />
  ),

  boolean: <T,>({ field, value, mode, onChange }: FieldRendererProps<T>) => (
    <SwitchField
      label={field.label}
      value={toChecked(value)}
      disabled={mode === "view"}
      onChange={(checked) => onChange(field.name, toBooleanLike(checked))}
    />
  ),

  // 👇 placeholders prontos
  date: () => null,
  datetime: () => null,
  relation: () => null,
  address: () => null,
};
