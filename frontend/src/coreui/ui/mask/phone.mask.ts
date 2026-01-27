export const phoneMask = {
  format(value: string) {
    if (!value) return "";

    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 10) {
      // (11) 1234-5678
      return digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    }

    // (11) 91234-5678
    return digits.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
  },

  parse(display: string) {
    return display.replace(/\D/g, "").slice(0, 11);
  },

  validate(value: string) {
    return value.length === 10 || value.length === 11;
  },

  validateOn: "blur" as const,
};
