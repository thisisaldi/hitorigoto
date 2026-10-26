import type { Metadata } from 'next';
import { Noto_Sans_JP, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const notoJp = Noto_Sans_JP({
  variable: '--font-jp',
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false, // Japanese glyphs load on demand via unicode-range
});

export const metadata: Metadata = {
  title: { default: 'hitorigoto: belajar bahasa Jepang dan JLPT', template: '%s | hitorigoto' },
  description:
    'Materi kanji, tata bahasa, membaca, dan mendengar untuk persiapan JLPT N5 sampai N1, dalam bahasa Indonesia.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id" className={`${poppins.variable} ${notoJp.variable}`}>
      <body className="min-h-dvh overflow-x-hidden bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Lewati ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
