"use client";

import { SidebarProvider } from "./Sidebar/SidebarContext";
import { AppLayout } from "./AppLayout";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppLayout>{children}</AppLayout>
    </SidebarProvider>
  );
}
