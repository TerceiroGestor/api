export const cpfMask = {
  format(value: string) {
    if (!value) return "";

    const digits = value.replace(/\D/g, "").slice(0, 11);

    return digits
      .replace(/^(\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  },

  parse(display: string): string {
    return display.replace(/\D/g, "").slice(0, 11);
  },

  validate(value: string) {
    return value.length === 11;
  },

  validateOn: "blur" as const,
};
