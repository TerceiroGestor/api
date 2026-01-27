import {
  inputWrapper,
  inputBase,
  textareaSizes,
  inputVariants,
  inputMessages,
} from "./input.styles";

type InputTextareaProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  variant?: "default" | "error" | "success";
  message?: string;
  size?: "sm" | "md" | "lg";
  rows?: number;

  /** ajuste visual pontual */
  className?: string;
} & Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value" | "onChange" | "onBlur" | "rows" | "className"
>;

export function InputTextarea({
  value,
  onChange,
  onBlur,
  variant = "default",
  message,
  size = "md",
  rows = 4,
  className,
  ...props
}: InputTextareaProps) {
  return (
    <div className={inputWrapper}>
      <textarea
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        className={[
          inputBase,
          textareaSizes[size],
          inputVariants[variant],

          //"resize-none", // controle de UX
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />

      {message && <p className={`text-sm ${inputMessages[variant]}`}>{message}</p>}
    </div>
  );
}
