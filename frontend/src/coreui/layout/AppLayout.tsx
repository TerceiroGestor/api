"use client";

import { Sidebar } from "./Sidebar/Sidebar";
import { Navbar } from "./Navbar/Navbar";
import { useSidebar } from "./Sidebar/SidebarContext";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const sidebarWidth = isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]";

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Content wrapper */}
      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${isMobileOpen ? "ml-0" : sidebarWidth} `}
      >
        {/* Navbar (fixo no topo do conteúdo) */}
        <div className="shrink-0">
          <Navbar />
        </div>

        {/* Page content com scroll próprio */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
