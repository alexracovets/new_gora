import type { Metadata } from "next";

import { Header } from '@/components/shared/header';
import { Modal } from "@/components/shared/modal/modal";

export const metadata: Metadata = {
  title: "ГОРА",
  description: "ГОРА",
};

export default function MapaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header canHide />
      <main>
        {children}
        <Modal />
      </main>
    </>
  );
}