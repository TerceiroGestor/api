// InputPassword.tsx
import { useState } from "react";
import { InputBase } from "./InputBase";
import { EyeIcon, EyeClosedIcon } from "lucide-react";

type InputPasswordProps = {
  visibilityToggle?: boolean;
} & Omit<React.ComponentProps<typeof InputBase>, "type" | "rightAction">;

export function InputPassword({ visibilityToggle = true, ...props }: InputPasswordProps) {
  const [visible, setVisible] = useState(false);

  return (
    <InputBase
      {...props}
      type={visible ? "text" : "password"}
      rightAction={
        visibilityToggle ? (
          <button
            type="button"
            aria-label={visible ? "Ocultar senha" : "Mostrar senha"}
            onClick={() => setVisible((v) => !v)}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {visible ? <EyeClosedIcon size={24} /> : <EyeIcon size={24} />}
          </button>
        ) : null
      }
    />
  );
}
