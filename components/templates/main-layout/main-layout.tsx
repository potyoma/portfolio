import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import type { ReactNode } from "react";

type MainLayoutProps = { children: ReactNode };

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="mt-8 max-w-screen-lg">{children}</main>
      <Footer />
    </>
  );
}
