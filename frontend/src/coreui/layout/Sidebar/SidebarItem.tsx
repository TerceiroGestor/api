"use client";

import Link from "next/link";

interface Props {
  label: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
  showText: boolean;
}

export function SidebarItem({
  label,
  icon,
  href,
  active,
  showText,
}: Props) {
  return (
    <Link
      href={href}
      className={`
        menu-item group flex items-center gap-3 px-3 py-2 rounded-md
        transition-colors
        ${
          active
            ? "menu-item-active bg-gray-100 text-brand-600"
            : "menu-item-inactive text-gray-600 hover:bg-gray-50"
        }
      `}
    >
      <span
        className={`
          ${active ? "menu-item-icon-active" : "menu-item-icon-inactive"}
        `}
      >
        {icon}
      </span>

      {showText && <span className="menu-item-text">{label}</span>}
    </Link>
  );
}
