import { useState } from "react";
import { InputBase } from "./InputBase";
import { MaskHandler } from "../mask/mask.types";

type InputDefaultProps = {
  mask?: MaskHandler;
  message?: string;
  variant?: "default" | "error" | "success";
} & Omit<React.ComponentProps<typeof InputBase>, "onChange" | "value"> & {
    value?: any;
    onChange?: (value: any) => void;
  };

export function InputDefault({
  mask,
  value,
  message,
  variant,
  onChange,
  onBlur,
  ...props
}: InputDefaultProps) {
  const [touched, setTouched] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!mask) {
      // SEM máscara → comportamento normal
      onChange?.(e.target.value);
      return;
    }

    // COM máscara:
    // 1. pega o valor digitado (UI)
    const displayValue = e.target.value;

    // 2. converte para valor de domínio
    const parsedValue = mask.parse(displayValue);

    // 3. envia SOMENTE o valor puro para fora
    onChange?.(parsedValue);
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    setTouched(true);
    onBlur?.(e);
  }

  // valor que será exibido no input
  const displayValue = mask ? mask.format(String(value ?? "")) : value;

  const shouldValidate = mask?.validate && touched && mask.validateOn === "blur";

  const isInvalid = shouldValidate && !mask!.validate!(value ?? "");

  const computedVariant = variant ?? (isInvalid ? "error" : shouldValidate ? "success" : "default");

  const computedMessage = mask ? (isInvalid ? message : undefined) : message;

  return (
    <InputBase
      {...props}
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      variant={computedVariant}
      message={computedMessage}
    />
  );
}
