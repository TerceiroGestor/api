import { InputBase } from "./InputBase";

type InputNumberProps = {
  value?: number;
  onChange?: (value: number | undefined) => void;
  min?: number;
  max?: number;
  step?: number;
} & Omit<React.ComponentProps<typeof InputBase>, "value" | "onChange" | "type">;

export function InputNumber({ value, onChange, min, max, step = 1, ...props }: InputNumberProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;

    if (raw === "") {
      onChange?.(undefined);
      return;
    }

    const num = Number(raw);

    if (Number.isNaN(num)) return;

    if (min !== undefined && num < min) return;
    if (max !== undefined && num > max) return;

    onChange?.(num);
  }

  return (
    <InputBase
      {...props}
      type="number"
      value={value !== undefined ? String(value) : ""}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      inputMode="numeric"
    />
  );
}
