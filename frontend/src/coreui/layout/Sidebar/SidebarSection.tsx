"use client";

import { usePathname } from "next/navigation";
import { SidebarItem as SidebarItemType } from "./sidebar.types";
import { SidebarItem } from "./SidebarItem";
import { SidebarDropdown } from "./SidebarDropdown";
import { useSidebar } from "./SidebarContext";

interface Props {
  title: string;
  items: SidebarItemType[];
}

export function SidebarSection({ title, items }: Props) {
  const pathname = usePathname();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const showText = isExpanded || isHovered || isMobileOpen;

  return (
    <section className="space-y-4">
      {/* Section title */}
      <h2
        className={`flex items-center px-2 text-xs text-gray-400 uppercase ${
          showText ? "justify-start" : "justify-center"
        }`}
      >
        {showText ? title : <span>•••</span>}
      </h2>

      {/* Items */}
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.name}>
            {item.subItems ? (
              <SidebarDropdown
                label={item.name}
                icon={item.icon}
                items={item.subItems}
                activePath={pathname}
                showText={showText}
              />
            ) : (
              item.path && (
                <SidebarItem
                  label={item.name}
                  icon={item.icon}
                  href={item.path}
                  active={pathname === item.path}
                  showText={showText}
                />
              )
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
