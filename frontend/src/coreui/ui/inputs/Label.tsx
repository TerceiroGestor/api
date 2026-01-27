import clsx from "clsx";

type LabelProps = {
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  floating?: boolean;
  hasValue?: boolean;
};

export function Label({ children, required, disabled, error, floating, hasValue }: LabelProps) {
  return (
    <label
      className={clsx(
        "text-body peer-focus:text-fg-brand absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
        disabled && "text-gray-400",
        error ? "text-red-600" : "text-gray-700",

        // modo normal (label acima)
        !floating && "mb-1 block",

        // modo floating
        floating && [
          "pointer-events-none absolute left-3",
          "origin-[0]",
          "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2",
          "peer-placeholder-shown:scale-100",
          "peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75",
          hasValue && "top-2 -translate-y-4 scale-75",
        ]
      )}
    >
      {children}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
}
