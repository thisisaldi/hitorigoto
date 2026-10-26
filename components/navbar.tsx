import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import down from '@/assets/img/chevron-down.png';
import { levels } from '@/lib/courses';
import { UserMenu } from './user-menu';

const menuLink = 'py-2 hover:text-brand';
const reversed = [...levels].reverse(); // N1 first, like the JLPT convention

// Static shell: only <UserMenu> reads the session, so it streams in behind Suspense.
export function NavBar() {
  return (
    <nav className="fixed z-10 flex h-20 w-full items-center justify-between gap-4 bg-white px-4 shadow-md md:px-12">
      <div className="flex items-center gap-4">
        <MobileMenu />
        <Link href="/" className="text-xl font-bold select-none md:text-2xl">
          hitorigoto
        </Link>
      </div>

      <ul className="hidden gap-10 md:flex lg:gap-20">
        <li>
          <Link className="select-none hover:text-brand" href="/aboutus">
            JLPT
          </Link>
        </li>
        <li className="dropdown">
          <div className="flex">
            <Link className="select-none hover:text-brand" href="/course">
              Courses
            </Link>
            <Image className="down-hover" src={down} alt="" />
          </div>
          <div className="dropdown-content w-32 rounded-md border-2 border-black px-4 py-2">
            {reversed.map((l) => (
              <Link key={l.slug} href={`/course/${l.slug}`} className={menuLink}>
                {l.title.replace(' - ', '-')}
              </Link>
            ))}
          </div>
        </li>
      </ul>

      <Suspense fallback={<div className="h-10 w-24 md:w-48" />}>
        <UserMenu />
      </Suspense>
    </nav>
  );
}

// No-JS hamburger for small screens.
function MobileMenu() {
  return (
    <details className="group relative md:hidden">
      <summary
        aria-label="Menu"
        className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-md hover:bg-cream"
      >
        <span className="h-0.5 w-5 bg-dark transition group-open:translate-y-2 group-open:rotate-45" />
        <span className="h-0.5 w-5 bg-dark transition group-open:opacity-0" />
        <span className="h-0.5 w-5 bg-dark transition group-open:-translate-y-2 group-open:-rotate-45" />
      </summary>
      <div className="absolute top-12 left-0 flex w-44 flex-col rounded-md border-2 border-black bg-white px-4 py-2">
        <Link href="/aboutus" className={menuLink}>
          JLPT
        </Link>
        <Link href="/course" className={menuLink}>
          Courses
        </Link>
        {reversed.map((l) => (
          <Link key={l.slug} href={`/course/${l.slug}`} className={`${menuLink} pl-4 text-sm`}>
            {l.title.replace(' - ', '-')}
          </Link>
        ))}
      </div>
    </details>
  );
}
