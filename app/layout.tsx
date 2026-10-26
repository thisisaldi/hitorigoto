import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: { default: 'hitorigoto', template: '%s | hitorigoto' },
  description: 'Belajar bahasa Jepang dan persiapan JLPT bersama hitorigoto.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
