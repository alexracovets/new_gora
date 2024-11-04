import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ГОРА",
  description: "ГОРА",
};

export default function MapaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}