export interface PersonProps {
  id: string;
  name: string;
  lastname: string;
  active: number;
  created: string;
  updated: string;
  contacts: ContactProps[];
  relatives: RelativeProps[];
}

export interface ContactProps {
  id: string;
  number: string;
  type: string;
  main: number;
  active: number;
}

export interface RelativeProps {
  relationship: string;
  relative_id: string;
  name: string;
  lastname: string;
}

