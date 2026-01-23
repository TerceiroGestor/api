// types.ts
export type FormMode = "create" | "edit" | "view";

export type FieldType =
  | "text"
  | "number"
  | "boolean"
  | "select"
  | "date"
  | "datetime"
  | "relation"
  | "textarea"
  | "richtext"
  | "address"

export interface FormField<T> {
  name: keyof T;
  label: string;
  type: FieldType;
  required?: boolean;
  rows?: number;
  hideOnView?: boolean;
  options?: { label: string; value: string }[];
}

export interface FormStep<T> {
  id: string;
  label: string;
  fields: FormField<T>[];
}

export interface AppFormProps<T> {
  data?: Partial<T>;
  fields?: FormField<T>[];
  steps?: FormStep<T>[];
  mode?: FormMode;
  onSubmit?: (data: T) => void | Promise<void>;
}
