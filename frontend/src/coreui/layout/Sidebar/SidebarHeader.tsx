"use client";

import Link from "next/link";
import Image from "next/image";
import { useSidebar } from "./SidebarContext";

export function SidebarHeader() {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const showFull = isExpanded || isHovered || isMobileOpen;

  return (
    <div className={`py-8 flex justify-center ${!showFull ? "justify-center" : ""}`}>
      <Link href="/">
        {showFull ? (
          <>
            <Image
              src="/images/logo/logo-text.png"
              alt="Logo"
              width={180}
              height={60}
            />
          </>
        ) : (
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            width={32}
            height={32}
          />
        )}
      </Link>
    </div>
  );
}
