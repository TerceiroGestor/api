import { useState } from "react";

type MaskResult = {
  value: string; // formatado
  raw: string; // sem máscara
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function useMask(mask: (value: string) => { value: string; raw: string }): MaskResult {
  const [value, setValue] = useState("");
  const [raw, setRaw] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const result = mask(inputValue);

    setValue(result.value);
    setRaw(result.raw);
  }

  return { value, raw, onChange };
}
