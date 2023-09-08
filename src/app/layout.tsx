import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { ReactNode } from 'react';

const baseFont = Noto_Sans_KR({
  weight: ['300', '500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '이다익 | FE Resume',
    template: '%s - FE Resume',
  },
  description: '이력서임',
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='kr'>
      <body className={baseFont.className}>{children}</body>
    </html>
  );
};

export default Layout;
