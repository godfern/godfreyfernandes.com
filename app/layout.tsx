// /app/layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Godfrey Portfolio',
  description: 'Frontend Developer Portfolio',
  appleWebApp: {
    title: 'godfern',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="godfern" />
      </head>
      <body>{children}</body>
    </html>
  );
}
