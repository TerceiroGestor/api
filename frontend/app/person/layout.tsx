// app/dashboard/layout.tsx
import { DashboardLayout } from "@/shared/layout/DashboardLayout";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardLayout>
        <div className="p-6">{children}</div>
    </DashboardLayout>
  );
}
