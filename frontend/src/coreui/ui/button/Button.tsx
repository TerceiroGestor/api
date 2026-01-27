"use client";

import { forwardRef } from "react";
import { cn } from "@/coreui/lib/cn";
import { ButtonProps } from "./button.types";
import { baseStyles, sizeStyles, iconSizeStyles, variantStyles } from "./button.styles";
import { ButtonActionExecutor } from "./ButtonActionExecutor";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      icon,
      mode = "default",
      variant = "primary",
      size = "md",
      loading = false,
      action,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isIcon = mode === "icon";

    return (
      <ButtonActionExecutor action={action} disabled={disabled || loading}>
        {(actionProps) => (
          <button
            ref={ref}
            className={cn(
              baseStyles,
              variantStyles[variant],
              isIcon ? iconSizeStyles[size] : sizeStyles[size],
              className
            )}
            disabled={disabled || loading}
            {...actionProps}
            {...props}
          >
            {loading ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : isIcon ? (
              icon
            ) : (
              <>
                {icon && <span className="mr-2">{icon}</span>}
                {label}
              </>
            )}
          </button>
        )}
      </ButtonActionExecutor>
    );
  }
);

Button.displayName = "Button";
