import { useState } from "react";
import { InputDefault } from "./InputDefault";

type InputEmailProps = Omit<
  React.ComponentProps<typeof InputDefault>,
  "type" | "variant" | "message"
> & {
  message?: string;
};

export function InputEmail({
  value,
  onChange,
  message = "E-mail inválido",
  onBlur,
  ...props
}: InputEmailProps) {
  const [touched, setTouched] = useState(false);

  const isValidEmail = typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setTouched(true);
    onBlur?.(e);
  }

  const isError = touched && !isValidEmail;

  return (
    <InputDefault
      {...props}
      type="email"
      inputMode="email"
      autoComplete="email"
      value={value}
      onChange={onChange}
      onBlur={handleBlur}
      variant={isError ? "error" : "default"}
      message={isError ? message : undefined}
    />
  );
}
