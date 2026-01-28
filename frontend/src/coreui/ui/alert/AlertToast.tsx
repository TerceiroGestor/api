"use client";

import { useEffect, useState } from "react";
import { Alert, AlertVariant } from "./Alert";
import clsx from "clsx";

interface AlertToastProps {
  variant: AlertVariant;
  title?: string;
  message: string;
  duration?: number; // ms (default 5000)
  onClose: () => void;
}

export function AlertToast({
  variant,
  title,
  message,
  duration = 5000,
  onClose,
}: AlertToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(percent);

      if (elapsed >= duration) {
        clearInterval(interval);
        onClose();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onClose]);

  return (
    <div className="pointer-events-auto w-[360px]">
      <Alert variant={variant} title={title}>
        {message}
      </Alert>

      {/* PROGRESS BAR */}
      <div className="mt-1 h-1 w-full overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
        <div
          className={clsx(
            "h-full transition-all",
            variant === "success" && "bg-success-500",
            variant === "error" && "bg-error-500",
            variant === "warning" && "bg-warning-500",
            variant === "info" && "bg-blue-light-500"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
