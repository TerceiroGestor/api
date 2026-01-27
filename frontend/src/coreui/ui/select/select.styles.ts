// coreui/ui/select/select.styles.ts
export const selectWrapper = "flex flex-col gap-1";

export const selectBase =
  "w-full rounded-md border bg-white text-sm text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed";

export const selectSizes = {
  sm: "h-9 px-3",
  md: "h-11 px-4",
  lg: "h-12 px-5 text-base",
};

export const selectVariants = {
  default: "border-gray-300 focus:border-brand-500 focus:ring-brand-500",
  error: "border-red-500 focus:border-red-500 focus:ring-red-500",
  success: "border-green-500 focus:border-green-500 focus:ring-green-500",
};

export const selectMessage = {
  default: "text-gray-500",
  error: "text-red-500",
  success: "text-green-500",
};

// select.styles.ts

export const selectDropdown = "mt-1 max-h-60 overflow-auto rounded-md border bg-white shadow-md";

export const selectOption =
  "flex w-full items-center gap-2 px-3 py-2 text-sm text-left transition-colors";

export const selectOptionHover = "hover:bg-gray-100";

export const selectOptionSelected = "bg-brand-50 text-brand-700";

export const selectOptionDisabled = "opacity-50 cursor-not-allowed";

export const multiSelectControl =
  "w-full min-h-[2.75rem] flex flex-wrap items-center gap-1 rounded-md border bg-white px-2 py-1 text-sm cursor-pointer focus:outline-none focus:ring-2";

export const multiSelectPlaceholder = "text-gray-400 px-1";

export const multiSelectTag =
  "flex items-center gap-1 rounded bg-brand-100 px-2 py-1 text-xs text-brand-700";

export const multiSelectTagRemove = "cursor-pointer text-brand-500 hover:text-brand-700";

export const multiSelectChevron = "ml-auto text-gray-400";
