// coreui/ui/steps/steps.styles.ts

export const stepsWrapper = "flex";

export const stepsHorizontal = "flex-row items-center";
export const stepsVertical = "flex-col";

export const stepItem = "flex items-center gap-2 cursor-pointer";

export const stepCircle =
  "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium";

export const stepLabelWrapper = "flex flex-col";

export const stepLabel = "text-sm font-medium";
export const stepDescription = "text-xs text-gray-500";

export const stepLine = "flex-1 h-px bg-gray-300 mx-2";

export const stepStates = {
  pending: {
    circle: "border-gray-300 text-gray-400",
    label: "text-gray-400",
  },
  active: {
    circle: "border-brand-600 bg-brand-600 text-white",
    label: "text-brand-600",
  },
  completed: {
    circle: "border-brand-600 bg-brand-100 text-brand-600",
    label: "text-brand-600",
  },
};
