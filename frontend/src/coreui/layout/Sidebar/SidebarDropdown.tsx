"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@coreui/icons";
import { SidebarSubItem } from "./sidebar.types";
import { useSidebar } from "./SidebarContext";

interface Props {
  label: string;
  icon: React.ReactNode;
  items: SidebarSubItem[];
  activePath: string;
  showText: boolean;
}

export function SidebarDropdown({ label, icon, items, activePath, showText }: Props) {
  const { openSubmenu, toggleSubmenu } = useSidebar();
  const isOpen = openSubmenu === label;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, items.length]);

  return (
    <>
      <button
        onClick={() => toggleSubmenu(label)}
        className={`menu-item flex w-full items-center gap-3 rounded-md px-3 py-2 transition-colors ${
          isOpen
            ? "menu-item-active text-brand-600 bg-gray-100"
            : "menu-item-inactive text-gray-600 hover:bg-gray-50"
        } `}
      >
        <span className={isOpen ? "menu-item-icon-active" : "menu-item-icon-inactive"}>{icon}</span>

        {showText && <span className="menu-item-text">{label}</span>}

        {showText && (
          <ChevronDownIcon
            className={`ml-auto h-5 w-5 transition-transform duration-200 ${isOpen ? "text-brand-500 rotate-180" : ""} `}
          />
        )}
      </button>

      {showText && (
        <div
          ref={contentRef}
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
          style={{ height }}
        >
          <ul className="mt-2 ml-9 space-y-1">
            {items.map((item) => {
              const active = activePath === item.path;

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`menu-dropdown-item flex items-center rounded-md px-3 py-2 transition-colors ${
                      active
                        ? "menu-dropdown-item-active text-brand-600 bg-gray-100"
                        : "menu-dropdown-item-inactive text-gray-600 hover:bg-gray-50"
                    } `}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
