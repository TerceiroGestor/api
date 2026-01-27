import { useEffect, useRef, useState } from "react";
import {
  selectWrapper,
  selectVariants,
  selectMessage,
  selectDropdown,
  selectOption,
  selectOptionHover,
  selectOptionSelected,
  selectOptionDisabled,
  multiSelectControl,
  multiSelectPlaceholder,
  multiSelectTag,
  multiSelectTagRemove,
  multiSelectChevron,
} from "./select.styles";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type MultiSelectProps = {
  value?: string[];
  onChange?: (values: string[]) => void;
  options: Option[];
  placeholder?: string;
  disabled?: boolean;
  variant?: "default" | "error" | "success";
  message?: string;
  className?: string;
};

export function MultiSelect({
  value = [],
  onChange,
  options,
  placeholder = "Selecione...",
  disabled,
  variant = "default",
  message,
  className,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function toggle(val: string) {
    const next = value.includes(val) ? value.filter((v) => v !== val) : [...value, val];

    onChange?.(next);
  }

  function remove(val: string) {
    onChange?.(value.filter((v) => v !== val));
  }

  useEffect(() => {
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className={selectWrapper} ref={ref}>
      {/* CONTROL */}
      <div
        tabIndex={0}
        onClick={() => !disabled && setOpen(true)}
        className={[
          multiSelectControl,
          selectVariants[variant],
          disabled ? "cursor-not-allowed opacity-60" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {value.length === 0 && <span className={multiSelectPlaceholder}>{placeholder}</span>}

        {value.map((val) => {
          const opt = options.find((o) => o.value === val);
          if (!opt) return null;

          return (
            <span key={val} className={multiSelectTag}>
              {opt.label}
              {!disabled && (
                <span
                  className={multiSelectTagRemove}
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(val);
                  }}
                >
                  ×
                </span>
              )}
            </span>
          );
        })}

        <span className={multiSelectChevron}>▾</span>
      </div>

      {/* DROPDOWN */}
      {open && !disabled && (
        <div className={selectDropdown}>
          {options.map((opt) => {
            const checked = value.includes(opt.value);

            return (
              <button
                key={opt.value}
                type="button"
                disabled={opt.disabled}
                onClick={() => toggle(opt.value)}
                className={[
                  selectOption,
                  checked ? selectOptionSelected : "",
                  opt.disabled ? selectOptionDisabled : selectOptionHover,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <input type="checkbox" checked={checked} readOnly className="accent-brand-600" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {message && <p className={`text-sm ${selectMessage[variant]}`}>{message}</p>}
    </div>
  );
}
