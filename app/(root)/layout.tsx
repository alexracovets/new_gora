import type { Metadata } from "next";
 
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: "ГОРА",
  description: "ГОРА",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <> 
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
