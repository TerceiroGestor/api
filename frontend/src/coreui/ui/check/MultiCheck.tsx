import { Check } from "./Check";

type MultiCheckOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type MultiCheckProps = {
  value?: string[];
  onChange?: (values: string[]) => void;
  options: MultiCheckOption[];
  disabled?: boolean;
  variant?: "default" | "error" | "success";
  className?: string;
};

export function MultiCheck({
  value = [],
  onChange,
  options,
  disabled,
  variant = "default",
  className,
}: MultiCheckProps) {
  function toggleOption(optionValue: string, checked: boolean) {
    const next = checked ? [...value, optionValue] : value.filter((v) => v !== optionValue);

    onChange?.(next);
  }

  return (
    <div className={`flex flex-col gap-2 ${className ?? ""}`}>
      {options.map((opt) => (
        <Check
          key={opt.value}
          value={value.includes(opt.value)}
          onChange={(checked) => toggleOption(opt.value, checked)}
          label={opt.label}
          disabled={disabled || opt.disabled}
          variant={variant}
        />
      ))}
    </div>
  );
}
