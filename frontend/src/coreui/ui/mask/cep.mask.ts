export const cepMask = {
  format(value: string) {
    if (!value) return "";

    const digits = value.replace(/\D/g, "").slice(0, 8);

    return digits.replace(/^(\d{5})(\d)/, "$1-$2");
  },

  parse(display: string) {
    return display.replace(/\D/g, "").slice(0, 8);
  },

  validate(value: string) {
    return value.length === 8;
  },

  validateOn: "blur" as const,
};
