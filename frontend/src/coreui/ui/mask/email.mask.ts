import { MaskHandler } from "./mask.types";

export const emailMask: MaskHandler = {
  format: (raw) => (raw ? raw.trim() : ""),

  validate: (value) => {
    if (!value) return false;

    // regex simples e suficiente para 99% dos casos
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },

  validateOn: "blur",
};
