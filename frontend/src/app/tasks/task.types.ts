export type Task = {
  id: string;
  title: string;
  description?: string;
  due_date?: string;
  budget?: number;
  active: boolean;
  created?: string;
  updated?: string;
};
