export interface PlaygroundData {
  name: string;
  age: number;
  active: 0 | 1;
  type: string;
  description: string;
}

export const initialData: Partial<PlaygroundData> = {
  name: "João da Silva",
  age: 30,
  active: 1,
  type: "admin",
  description: "<p>Texto <strong>rico</strong></p>",
};
