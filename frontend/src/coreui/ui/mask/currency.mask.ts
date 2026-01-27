export const currencyMask = {
  format(value: number | string) {
    const number = typeof value === "number" ? value : Number(value || 0);

    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  },

  parse(display: string): number {
    // mantém apenas dígitos
    const digits = display.replace(/\D/g, "");

    if (!digits) return 0;

    // buffer de centavos
    return Number(digits) / 100;
  },
};
