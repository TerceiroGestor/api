"use client";

import { NavbarLeft } from "./NavbarLeft";
import { NavbarCenter } from "./NavbarCenter";
import { NavbarRight } from "./NavbarRight";

export function Navbar() {
  return (
    <header className="
      sticky top-0 z-40 h-16
      flex items-center
      border-b border-gray-200
      bg-white dark:bg-gray-900
      px-4
    ">
      <NavbarLeft />
      <NavbarCenter />
      <NavbarRight />
    </header>
  );
}
