"use client";

import { HorizontaLDots } from "@coreui/icons";
import { PanelsTopLeft } from "lucide-react";
import { useSidebar } from "@coreui/layout/Sidebar/SidebarContext";

export function NavbarLeft() {
  const { toggleSidebar, toggleMobileSidebar } = useSidebar();

  return (
    <div className="flex items-center gap-2">
      {/* Desktop toggle */}
      <button onClick={toggleSidebar} className="hidden rounded-md p-2 hover:bg-gray-100 lg:flex">
        <PanelsTopLeft color="gray" />
      </button>

      {/* Mobile toggle */}
      <button onClick={toggleMobileSidebar} className="rounded-md p-2 hover:bg-gray-100 lg:hidden">
        <PanelsTopLeft color="gray" />
      </button>
    </div>
  );
}
