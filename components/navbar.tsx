import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import down from '@/assets/img/chevron-down.png';
import { levels } from '@/lib/courses';
import { Container } from './container';
import { NavLink } from './nav-link';
import { UserMenu } from './user-menu';

const menuLink = 'rounded-md px-3 py-2 transition hover:bg-cream hover:text-brand';
const reversed = [...levels].reverse(); // N1 first, like the JLPT convention
const linkStyle = 'select-none transition hover:text-brand';

// Static shell: only <UserMenu> reads the session, so it streams in behind Suspense.
export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <Container className="flex h-20 max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MobileMenu />
          <Link href="/" className="text-xl font-bold tracking-tight select-none md:text-2xl">
            hitorigoto
          </Link>
        </div>

        <nav aria-label="Utama" className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li>
              <Suspense fallback={<span className={linkStyle}>JLPT</span>}>
                <NavLink className={linkStyle} href="/aboutus">
                  JLPT
                </NavLink>
              </Suspense>
            </li>
            <li className="dropdown">
              <div className="flex items-center">
                <Suspense fallback={<span className={linkStyle}>Courses</span>}>
                  <NavLink className={linkStyle} href="/course">
                    Courses
                  </NavLink>
                </Suspense>
                <Image className="down-hover" src={down} alt="" />
              </div>
              <div className="dropdown-content -left-4 w-40 rounded-xl border border-black/10 p-2 shadow-soft">
                {reversed.map((l) => (
                  <Link key={l.slug} href={`/course/${l.slug}`} className={menuLink}>
                    {l.title.replace(' - ', '-')}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div className="h-10 w-24 md:w-48" />}>
          <UserMenu />
        </Suspense>
      </Container>
    </header>
  );
}

// No-JS hamburger for small screens.
function MobileMenu() {
  return (
    <details className="group relative md:hidden">
      <summary
        aria-label="Menu"
        className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-cream"
      >
        <span className="h-0.5 w-5 bg-dark transition group-open:translate-y-2 group-open:rotate-45" />
        <span className="h-0.5 w-5 bg-dark transition group-open:opacity-0" />
        <span className="h-0.5 w-5 bg-dark transition group-open:-translate-y-2 group-open:-rotate-45" />
      </summary>
      <div className="absolute top-12 left-0 flex w-48 flex-col rounded-xl border border-black/10 bg-white p-2 shadow-soft">
        <Link href="/aboutus" className={menuLink}>
          JLPT
        </Link>
        <Link href="/course" className={menuLink}>
          Courses
        </Link>
        {reversed.map((l) => (
          <Link key={l.slug} href={`/course/${l.slug}`} className={`${menuLink} pl-6 text-sm`}>
            {l.title.replace(' - ', '-')}
          </Link>
        ))}
      </div>
    </details>
  );
}
