import { useId } from "react";
import {
  toggleWrapper,
  toggleTrack,
  toggleThumb,
  toggleVariants,
  toggleLabel,
} from "./toggle.styles";

type ToggleProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  variant?: "default" | "error" | "success";
  className?: string;
};

export function Toggle({
  value = false,
  onChange,
  label,
  disabled,
  variant = "default",
  className,
}: ToggleProps) {
  const id = useId();
  const styles = toggleVariants[variant];

  return (
    <label htmlFor={id} className={`${toggleWrapper} ${disabled ? "opacity-60" : ""}`}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={value}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!value)}
        className={[
          toggleTrack,
          value ? styles.on : styles.off,
          disabled ? "cursor-not-allowed" : "cursor-pointer",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className={[toggleThumb, value ? "translate-x-5" : "translate-x-1"].join(" ")} />
      </button>

      {label && <span className={toggleLabel}>{label}</span>}
    </label>
  );
}
