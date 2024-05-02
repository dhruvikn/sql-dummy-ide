import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './styles/globals.css';

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SQL Dummy IDE',
  description: 'Dummy SQL IDE made with Next.js and TypeScript'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  );
}
