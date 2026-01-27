// masks/mask.utils.ts
export function applyMask(value: string, mask: string) {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";

  let result = "";
  let digitIndex = 0;
  const firstDigitPos = mask.indexOf("0");

  for (let i = 0; i < mask.length; i++) {
    const char = mask[i];

    // prefixo simbólico
    if (i < firstDigitPos) {
      result += char;
      continue;
    }

    if (char === "0") {
      if (digitIndex >= digits.length) break;
      result += digits[digitIndex++];
    } else {
      if (digitIndex > 0) result += char;
    }
  }

  return result;
}

export function isMaskComplete(value: string, mask: string) {
  const digits = value.replace(/\D/g, "");
  const required = (mask.match(/0/g) || []).length;
  return digits.length === required;
}
