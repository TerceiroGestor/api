import { InputHTMLAttributes } from "react";
import { ReactNode } from "react";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "error" | "success";
export type InputPrefix =
  | string
  | ReactNode
  | {
      value: string;
      options: string[];
      onChange: (value: string) => void;
    };

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  size?: InputSize;
  variant?: InputVariant;

  /** Prefixo visual */
  prefix?: InputPrefix;

  /** Sufixo visual */
  suffix?: string | ReactNode;

  /** Botão para limpar o campo */
  clearable?: boolean;

  /** Mensagem visual (erro, aviso, helper etc.) */
  message?: string;

  /** Habilita botão de visualizar senha quando type="password" */
  visibilityToggle?: boolean;
}
