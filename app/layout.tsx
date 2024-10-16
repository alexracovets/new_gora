import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

import "./globals.css";
export default function InitLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href='/favicon.ico' />
      </head>
      <body className={`${montserrat.variable} text-regal-black`}>
        {children}
      </body>
    </html>
  );
}