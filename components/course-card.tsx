import Image from 'next/image';
import Link from 'next/link';
import type { Level } from '@/lib/courses';

export function CourseCard({ level }: { level: Level }) {
  return (
    <Link
      href={`/course/${level.slug}`}
      className="flex min-h-[560px] w-full max-w-[300px] flex-col items-center gap-4 rounded-lg p-6 shadow-2xl transition hover:-translate-y-1 hover:shadow-brand/30 focus-visible:outline-2 focus-visible:outline-brand"
    >
      <Image className="h-[250px] w-[250px] object-cover" src={level.image} alt="" />
      <p className="w-[250px] text-xs">Oleh Hitorigoto Team</p>
      <h2 className="w-[250px] text-2xl font-bold">{level.title}</h2>
      <p className="w-[250px] text-xs">{level.summary}</p>
    </Link>
  );
}
