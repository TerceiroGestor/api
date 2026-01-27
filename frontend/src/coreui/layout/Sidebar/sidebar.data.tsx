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
    name: "Dashboard",
    icon: <GridIcon />,
    subItems: [{ name: "Ecommerce", path: "/" }],
  },
  {
    name: "Calendar",
    icon: <CalenderIcon />,
    path: "/calendar",
  },
  {
    name: "User Profile",
    icon: <UserCircleIcon />,
    path: "/profile",
  },
  {
    name: "Form Engine",
    icon: <FormIcon />,
    path: "/form-engine",
  },
];

export const othersMenu: SidebarItem[] = [
  {
    name: "Charts",
    icon: <PieChartIcon />,
    subItems: [
      { name: "Line Chart", path: "/line-chart" },
      { name: "Bar Chart", path: "/bar-chart" },
    ],
  },
  {
    name: "Authentication",
    icon: <PlugInIcon />,
    subItems: [
      { name: "Sign In", path: "/signin" },
      { name: "Sign Up", path: "/signup" },
    ],
  },
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
    ],
  },
];
