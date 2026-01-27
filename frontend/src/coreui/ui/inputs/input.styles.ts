import { InputSize, InputVariant } from "./input.types";

/**
 * Layout externo (wrapper do componente)
 */
export const inputWrapper = "flex flex-col gap-1";

/**
 * Estilo base do input (NUNCA muda)
 */
export const inputBase =
  "w-full rounded-md border bg-white text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed dark:bg-dark-900 dark:text-white dark:placeholder-gray-400";

/**
 * Tamanhos
 */
export const inputSizes: Record<InputSize, string> = {
  sm: "h-9 px-3",
  md: "h-11 px-4",
  lg: "h-12 px-5 text-base",
};

/**
 * Variantes visuais
 */
export const inputVariants: Record<InputVariant, string> = {
  default: "border-gray-300 focus:border-brand-500 focus:ring-brand-500 dark:border-gray-700",
  error: "border-red-500 focus:border-red-500 focus:ring-red-500",
  success: "border-green-500 focus:border-green-500 focus:ring-green-500",
};

/**
 * Mensagens (abaixo do input)
 */
export const inputMessages: Record<InputVariant, string> = {
  default: "text-gray-500",
  error: "text-red-500",
  success: "text-green-600",
};

export const textareaSizes: Record<InputSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};
