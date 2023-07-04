import './globals.css';
import React from 'react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata = {
  title: 'Campaigns',
  description: 'Campaigns by ColoredCow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`theme-agriculture ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
