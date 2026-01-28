import { ReactNode } from "react";

/* ======================================================
 * FIELD TYPES
 * ====================================================== */


export type FieldType =
  | "text"
  | "number"
  | "money"
  | "cpf"
  | "boolean"
  | "select"
  | "multiselect"
  | "richtext"
  | "date";

/* ======================================================
 * BASE FIELD
 * ====================================================== */

export interface BaseField<T = any> {
  /** Nome da propriedade no objeto final */
  name: keyof T & string;

  /** Label exibido no formulário */
  label: string;

  /** Tipo do campo */
  type: FieldType;

  /** Campo desabilitado */
  disabled?: boolean;

  /** Valor padrão (usado quando não há initialValues) */
  defaultValue?: any;

  /** Texto auxiliar (hint, help, description) */
  helperText?: string;
}

/* ======================================================
 * SIMPLE INPUTS (text, number, money)
 * ====================================================== */

export interface TextField<T = any> extends BaseField<T> {
  type: "text" | "number" | "money" | "cpf";
  placeholder?: string;
}

export interface DateField<T = any> extends BaseField<T> {
  type: "date";
}

/* ======================================================
 * BOOLEAN (checkbox / switch)
 * ====================================================== */

export interface BooleanField<T = any> extends BaseField<T> {
  type: "boolean";
  persistAs?: "boolean" | "number";
}

/* ======================================================
 * SELECT / MULTISELECT
 * ====================================================== */

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectField<T = any> extends BaseField<T> {
  type: "select" | "multiselect";
  options: SelectOption[];
}

/* ======================================================
 * RICHTEXT
 * ====================================================== */

export interface RichTextField<T = any> extends BaseField<T> {
  type: "richtext";
}

/* ======================================================
 * FORM FIELD UNION (CORE)
 * ====================================================== */

export type FormField<T = any> =
  | TextField<T>
  | BooleanField<T>
  | SelectField<T>
  | RichTextField<T>
  | DateField<T>;

/* ======================================================
 * FORM STEPS
 * ====================================================== */

export interface FormStep {
  /** Título do step */
  title: string;

  /** Campos que pertencem ao step (por name) */
  fields: string[];

  /** Conteúdo opcional (descrição, aviso, etc.) */
  description?: ReactNode;
}

/* ======================================================
 * FORM ENGINE PROPS
 * ====================================================== */

export type FormAction = {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger";
};

export type FormActions = {
  submit?: FormAction;
  cancel?: FormAction;
};

export interface FormEngineProps<T = any> {
  id?: string;

  /** Lista de campos do formulário */
  fields: FormField<T>[];

  /** Steps opcionais */
  steps?: FormStep[];

  /** Valores iniciais (modo edição) */
  initialValues?: Partial<T>;

  /** Callback de submit */
  onSubmit: (values: T) => void;

  /** Renderização customizada de botões */
  renderFooter?: ReactNode;

  /** Desabilita todo o formulário */
  disabled?: boolean;

  actions?: FormActions;
}
