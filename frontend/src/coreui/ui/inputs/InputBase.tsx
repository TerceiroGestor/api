// InputBase.tsx
import { inputWrapper, inputBase, inputSizes, inputVariants, inputMessages } from "./input.styles";
import { Label } from "./Label";

import { X } from "lucide-react";

type InputBaseProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  variant?: "default" | "error" | "success";
  message?: string;
  clearable?: boolean;
  size?: "sm" | "md" | "lg";
  rightAction?: React.ReactNode;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "onBlur" | "size">;

export function InputBase({
  label,
  value,
  onChange,
  onBlur,
  variant = "default",
  message,
  clearable,
  size = "md",
  rightAction,
  className,
  ...props
}: InputBaseProps) {
  return (
    <div className={inputWrapper}>
      <div className="relative">
        {label && (
          <label
            htmlFor={props.id}
            className={[
              value && "-translate-y-4 scale-75",
              // erro
              variant === "error" && "text-red-600 peer-focus:text-red-600",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {label}
          </label>
        )}

        <input
          {...props}
          id={props.id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder=" "
          className={[
            inputBase,
            inputSizes[size],
            inputVariants[variant],
            "", // espaço para a label flutuar
            clearable || rightAction ? "pr-16" : null,
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        />

        {/* AÇÃO DO TIPO (senha, search, etc.) */}
        {rightAction && (
          <div className="absolute top-1/2 right-5 -translate-y-1/2">{rightAction}</div>
        )}

        {clearable && value && (
          <button
            type="button"
            aria-label="Limpar campo"
            onClick={() =>
              onChange?.({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute inset-y-0 right-3 my-auto flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {message && <p className={`text-sm ${inputMessages[variant]}`}>{message}</p>}
    </div>
  );
}
