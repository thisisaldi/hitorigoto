import { cacheLife } from 'next/cache';
import Link from 'next/link';
import { Container } from './container';

const links = [
  { href: '/aboutus', label: 'Tentang JLPT' },
  { href: '/course', label: 'Courses' },
  { href: '/login', label: 'Masuk' },
];

export async function Footer() {
  'use cache';
  cacheLife('days');

  return (
    <footer className="bg-brand-ink text-white">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <p className="text-2xl font-bold tracking-tight select-none">hitorigoto</p>
          <p className="mt-3 text-sm text-white/70">
            Belajar bahasa Jepang dengan tenang dan di tempo sendiri. Materi JLPT N5 sampai N1 dalam
            bahasa Indonesia.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/50">
          © {new Date().getFullYear()} hitorigoto. 独り言 berarti bergumam sendiri.
        </Container>
      </div>
    </footer>
  );
}
