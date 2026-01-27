import {
  selectWrapper,
  selectBase,
  selectSizes,
  selectVariants,
  selectMessage,
} from "./select.styles";

type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SelectProps = {
  value?: string;
  onChange?: (value: string | undefined) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  variant?: "default" | "error" | "success";
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Select({
  value,
  onChange,
  options,
  placeholder = "Selecione...",
  disabled,
  variant = "default",
  message,
  size = "md",
  className,
}: SelectProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    onChange?.(val === "" ? undefined : val);
  }

  return (
    <div className={selectWrapper}>
      <select
        value={value ?? ""}
        onChange={handleChange}
        disabled={disabled}
        className={[selectBase, selectSizes[size], selectVariants[variant], className]
          .filter(Boolean)
          .join(" ")}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>

      {message && <p className={`text-sm ${selectMessage[variant]}`}>{message}</p>}
    </div>
  );
}
