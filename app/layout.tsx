// /app/layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: 'Godfrey Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={pacifico.className}>
      <body>{children}</body>
    </html>
  );
}
