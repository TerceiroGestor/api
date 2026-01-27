export function useInputMask(mask?: { format: (v: string) => string }) {
  if (!mask) return undefined;

  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const formatted = mask.format(raw);

    // altera APENAS o valor do input
    e.target.value = formatted;
  };
}
