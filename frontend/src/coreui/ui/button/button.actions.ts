export type ButtonAction =
  | { type: "submit" }
  | { type: "reset" }
  | { type: "button" }
  | { type: "callback"; onClick: () => void }
  | { type: "navigate"; href: string };
