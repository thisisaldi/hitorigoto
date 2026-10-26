import Image from 'next/image';
import Link from 'next/link';
import type { Level } from '@/lib/courses';

export function CourseCard({ level }: { level: Level }) {
  const available = !!level.sections;
  return (
    <Link
      href={`/course/${level.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative">
        <Image className="aspect-square w-full object-cover" src={level.image} alt="" />
        <span className="absolute top-3 left-3 rounded-md bg-brand px-2.5 py-1 text-sm font-bold text-white">
          {level.slug.toUpperCase()}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-xs text-dark/50">Oleh tim hitorigoto</p>
        <h2 className="text-xl font-bold">{level.title}</h2>
        <p className="text-sm text-dark/70">{level.summary}</p>
        <p className="mt-auto pt-3 text-sm font-semibold text-brand">
          {available ? 'Buka materi' : 'Segera hadir'}{' '}
          <span aria-hidden className="inline-block transition group-hover:translate-x-1">
            →
          </span>
        </p>
      </div>
    </Link>
  );
}
