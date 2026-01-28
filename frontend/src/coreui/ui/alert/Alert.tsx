import React from "react";
import clsx from "clsx";

export type AlertVariant = "success" | "error" | "warning" | "info";

interface AlertProps {
  variant: AlertVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const styles = {
  success: {
    container:
      "border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
    icon: "text-success-500",
  },
  error: {
    container:
      "border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
    icon: "text-error-500",
  },
  warning: {
    container:
      "border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
    icon: "text-warning-500",
  },
  info: {
    container:
      "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
    icon: "text-blue-light-500",
  },
};

const icons: Record<AlertVariant, React.ReactNode> = {
  success: (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.3 7.3a1 1 0 00-1.4-1.4l-4.1 4.1-1.7-1.7a1 1 0 00-1.4 1.4l2.4 2.4a1 1 0 001.4 0l4.8-4.8z"
      />
    </svg>
  ),
  error: (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z" />
    </svg>
  ),
  warning: (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
    </svg>
  ),
  info: (
    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-6h2v6zm0-8h-2V6h2v2z" />
    </svg>
  ),
};

export function Alert({ variant, title, children, className }: AlertProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border p-4",
        styles[variant].container,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={clsx("-mt-0.5", styles[variant].icon)}>
          {icons[variant]}
        </div>

        <div className="space-y-1">
          {title && (
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white/90">
              {title}
            </h4>
          )}

          <div className="text-sm text-gray-600 dark:text-gray-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
