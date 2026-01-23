// utils.ts
export function toStringValue(value: unknown): string {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  return String(value);
}

export function toNumberValue(value: unknown): number {
  if (typeof value === "number") return value;
  if (typeof value === "string" && value !== "") return Number(value);
  return 0;
}

export type BooleanLike = 0 | 1;

export function toChecked(value: unknown): boolean {
  return value === 1 || value === true;
}

export function toBooleanLike(value: boolean): BooleanLike {
  return value ? 1 : 0;
}
