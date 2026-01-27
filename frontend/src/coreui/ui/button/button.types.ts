import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonAction } from "./button.actions";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonMode = "default" | "icon";

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "type"
> {
  label?: string;
  icon?: ReactNode;

  mode?: ButtonMode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;

  action?: ButtonAction;
}
