import Image from 'next/image';
import Link from 'next/link';
import type { Level } from '@/lib/courses';

export function CourseCard({ level }: { level: Level }) {
  return (
    <Link
      href={`/course/${level.slug}`}
      className="flex h-[600px] w-[300px] flex-col items-center gap-4 rounded-lg p-6 shadow-2xl"
    >
      <Image className="h-[250px] w-[250px] object-cover" src={level.image} alt="" />
      <p className="w-[250px] text-xs">Oleh Hitorigoto Team</p>
      <h2 className="w-[250px] text-2xl font-bold">{level.title}</h2>
      <p className="w-[250px] text-xs">{level.summary}</p>
    </Link>
  );
}
