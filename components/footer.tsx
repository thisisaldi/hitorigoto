import { cacheLife } from 'next/cache';

export async function Footer() {
  'use cache';
  cacheLife('days');

  return (
    <footer className="flex h-20 items-center justify-between bg-brand px-12 text-white select-none">
      <h1 className="text-2xl font-bold">hitorigoto</h1>
      <p>© {new Date().getFullYear()} hitorigoto</p>
    </footer>
  );
}
