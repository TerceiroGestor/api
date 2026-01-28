"use client";

import { mainMenu, tools } from "./sidebar.data";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarSection } from "./SidebarSection";
import { useSidebar } from "./SidebarContext";

export function Sidebar() {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();

  return (
    <aside
      className={`fixed top-0 left-0 z-50 flex h-screen flex-col border-r bg-white transition-all duration-100 ${isExpanded || isHovered || isMobileOpen ? "w-[290px]" : "w-[90px]"} ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* HEADER FIXO */}
      <div className="shrink-0">
        <SidebarHeader />
      </div>

      {/* ÁREA COM SCROLL */}
      <nav className="scrollbar-soft flex-1 space-y-6 overflow-y-auto px-4 py-4">
        <SidebarSection title="Menu" items={mainMenu} />
        <SidebarSection title="Tools UI" items={tools} />
      </nav>
    </aside>
  );
}
