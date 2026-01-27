export const rgMask = {
  format(value: string) {
    if (!value) return "";

    const cleaned = value
      .toUpperCase()
      .replace(/[^0-9X]/g, "")
      .slice(0, 9);

    return cleaned
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})([0-9X])/, "$1.$2.$3-$4");
  },

  parse(display: string) {
    return display
      .toUpperCase()
      .replace(/[^0-9X]/g, "")
      .slice(0, 9);
  },

  validate(value: string) {
    return value.length >= 7 && value.length <= 9;
  },

  validateOn: "blur" as const,
};
