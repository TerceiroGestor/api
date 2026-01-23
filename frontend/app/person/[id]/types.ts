import { ContactProps } from "./components/contacts";
import { RelativeProps } from "./components/relatives";

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