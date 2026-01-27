export type SidebarSubItem = {
  name: string;
  path: string;
  pro?: boolean;
  new?: boolean;
};

export type SidebarItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: SidebarSubItem[];
};
