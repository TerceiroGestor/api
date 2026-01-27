export interface MaskHandler {
  format: (value: string) => string; // domínio → UI
  parse: (display: string) => any; // UI → domínio
  validate?: (value: any) => boolean;
  validateOn?: "blur" | "change";
}
