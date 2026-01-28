import { ReactNode } from "react";
import { ButtonAction } from "./button.actions";

interface ButtonActionExecutorProps {
  action?: ButtonAction;
  disabled?: boolean;
  children: (props: { type?: "button" | "submit" | "reset"; onClick?: () => void }) => ReactNode;
}

export function ButtonActionExecutor({ action, disabled, children }: ButtonActionExecutorProps) {
  if (!action) {
    return children({ type: "button" });
  }

  switch (action.type) {
    case "submit":
      return children({ type: "submit" });

    case "reset":
      return children({ type: "reset" });

    case "callback":
      return children({
        type: "button", // 🔥 FIX CRÍTICO
        onClick: disabled ? undefined : action.onClick,
      });

    case "navigate":
      return children({
        type: "button", // 🔥 FIX CRÍTICO
        onClick: disabled
          ? undefined
          : () => {
              window.location.href = action.href;
            },
      });

    default:
      return children({ type: "button" });
  }
}
