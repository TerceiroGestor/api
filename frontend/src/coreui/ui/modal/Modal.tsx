"use client";
import React, { useRef, useEffect } from "react";
import { cn } from "@/coreui/lib/cn";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  isFullscreen?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  className,
  showCloseButton = true,
  isFullscreen = false,
  size = "md",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center">
      {!isFullscreen && (
        <div className="absolute inset-0 bg-gray-400/50 backdrop-blur-[32px]" onClick={onClose} />
      )}

      <div
        ref={modalRef}
        className={cn(
          "relative flex max-h-[90vh] w-full flex-col rounded-3xl bg-white dark:bg-gray-900",
          !isFullscreen && sizeClasses[size],
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between border-b px-6 py-4">
            
            {title && (
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h3>
            )}

            {showCloseButton && (
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

        {/* FOOTER */}
        {footer && <div className="flex justify-end gap-3 border-t px-6 py-4">{footer}</div>}
      </div>
    </div>
  );
};
