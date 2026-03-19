import type { Metadata } from "next";
import { homeStaticMeta } from "@/content/homeStatic";
import "./globals.css";

export const metadata: Metadata = {
  title: homeStaticMeta.title,
  description: homeStaticMeta.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
