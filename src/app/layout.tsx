import './globals.css';
import React from 'react';
import { Nunito } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer />
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
