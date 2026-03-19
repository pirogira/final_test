import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { homeMetaQuery } from "@/sanity/lib/queries";
import { HomePageData } from "@/types/home";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch<HomePageData>({ query: homeMetaQuery });

  return {
    title: data?.title || "Modern Next Landing",
    description:
      data?.metaDescription ||
      "Responsive landing page built with Next.js and Tailwind CSS"
  };
}

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
