'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

/** Link that marks itself as the current page. */
export function NavLink({ href, className = '', ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const active = pathname === href || (href !== '/' && pathname.startsWith(`${String(href)}/`));
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`${className} ${active ? 'text-brand' : ''}`}
      {...props}
    />
  );
}
