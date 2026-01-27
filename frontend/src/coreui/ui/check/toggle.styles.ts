// coreui/ui/check/toggle.styles.ts

export const toggleWrapper = "inline-flex items-center gap-2";

export const toggleTrack =
  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0";

export const toggleThumb =
  "inline-block h-5 w-5 transform rounded-full bg-white transition-transform";

export const toggleVariants = {
  default: {
    on: "bg-brand-600 focus:ring-brand-500",
    off: "bg-gray-300 focus:ring-gray-400",
  },
  error: {
    on: "bg-red-600 focus:ring-red-500",
    off: "bg-red-300 focus:ring-red-400",
  },
  success: {
    on: "bg-green-600 focus:ring-green-500",
    off: "bg-green-300 focus:ring-green-400",
  },
};

export const toggleLabel = "text-sm text-gray-700 select-none cursor-pointer";
