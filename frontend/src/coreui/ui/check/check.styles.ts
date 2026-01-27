// coreui/ui/check/check.styles.ts

export const checkWrapper = "flex items-center gap-2";

export const checkBoxBase =
  "h-4 w-4 rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed";

export const checkVariants = {
  default: "border-gray-300 text-brand-600 focus:ring-brand-500",
  error: "border-red-500 text-red-600 focus:ring-red-500",
  success: "border-green-500 text-green-600 focus:ring-green-500",
};

export const checkLabel = "text-sm text-gray-700 select-none cursor-pointer";
