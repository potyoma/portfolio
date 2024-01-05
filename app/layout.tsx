import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/templates/main-layout";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "potyoma - Creative Developer",
  description: "Fullstack Software Developer to build your next website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "animate-bg flex flex-col items-center py-6")}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
