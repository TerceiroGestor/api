import { useId } from "react";
import { checkWrapper, checkBoxBase, checkVariants, checkLabel } from "./check.styles";

type CheckProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  variant?: "default" | "error" | "success";
  className?: string;
};

export function Check({
  value = false,
  onChange,
  label,
  disabled,
  variant = "default",
  className,
}: CheckProps) {
  const id = useId();

  return (
    <label htmlFor={id} className={`${checkWrapper} ${disabled ? "opacity-60" : ""}`}>
      <input
        id={id}
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className={[checkBoxBase, checkVariants[variant], className].filter(Boolean).join(" ")}
      />

      {label && <span className={checkLabel}>{label}</span>}
    </label>
  );
}
