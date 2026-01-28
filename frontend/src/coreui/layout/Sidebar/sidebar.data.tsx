import {
  GridIcon,
  CalenderIcon,
  UserCircleIcon,
  ListIcon,
  TableIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  CheckLineIcon,
  TaskIcon
} from "@coreui/icons";
import { SidebarItem } from "./sidebar.types";
import {
  FormIcon,
  CirclePower,
  TextSelectIcon,
  StepForwardIcon,
  Table2Icon,
  ToolCase,
} from "lucide-react";

export const mainMenu: SidebarItem[] = [
  {
    name: "Tarefas",
    icon: <TaskIcon/>,
    path: "/tasks",
  }
];


export const tools: SidebarItem[] = [
  {
    name: "Ferramentas",
    icon: <ToolCase />,
    subItems: [
      {
        name: "Buttons",
        path: "/buttons",
      },
      {
        name: "Forms",
        path: "/forms",
      },
      {
        name: "Check",
        path: "/check",
      },
      {
        name: "Select",
        path: "/select",
      },
      {
        name: "Tabs",
        path: "/tabs",
      },
      {
        name: "Steps",
        path: "/steps",
      },
      {
        name: "Dashboard",
        path: "/",
      },
      {
        name: "Calendar",
        path: "/calendar",
      },
      {
        name: "User Profile",
        path: "/profile",
      },
      {
        name: "Form Engine",
        path: "/form-engine",
      },
      { name: "Line Chart", path: "/line-chart" },
      { name: "Bar Chart", path: "/bar-chart" },
      { name: "Sign In", path: "/signin" },
      { name: "Sign Up", path: "/signup" },
    ],
  },
];
