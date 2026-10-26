import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import down from '@/assets/img/chevron-down.png';
import { levels } from '@/lib/courses';
import { UserMenu } from './user-menu';

const menuLink = 'py-2 hover:text-brand';

// Static shell: only <UserMenu> reads the session, so it streams in behind Suspense.
export function NavBar() {
  return (
    <nav className="fixed z-10 flex h-20 w-full items-center justify-between bg-white px-12 shadow-md">
      <Link href="/" className="text-2xl font-bold select-none">
        hitorigoto
      </Link>
      <ul className="flex gap-20">
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
            {[...levels].reverse().map((l) => (
              <Link key={l.slug} href={`/course/${l.slug}`} className={menuLink}>
                {l.title.replace(' - ', '-')}
              </Link>
            ))}
          </div>
        </li>
      </ul>
      <Suspense fallback={<div className="h-10 w-48" />}>
        <UserMenu />
      </Suspense>
    </nav>
  );
}
