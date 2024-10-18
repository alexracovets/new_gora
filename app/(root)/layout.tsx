import type { Metadata } from "next";

import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { Scroll } from '@/components/shared/scroll';

export const metadata: Metadata = {
  title: "ГОРА",
  description: "ГОРА",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <Scroll>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Scroll>
  );
}
