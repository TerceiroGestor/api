import { Outfit } from "next/font/google";
import "./globals.css";
import "flatpickr/dist/flatpickr.css";
import { ThemeProvider } from "@coreui/theme/ThemeContext";
import { AppShell } from "@/coreui/layout/AppShell";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Terceiro Gestor",
  description: "Sistema de Gestão de OSCs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
