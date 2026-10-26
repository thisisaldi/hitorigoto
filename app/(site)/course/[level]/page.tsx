import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/button';
import down from '@/assets/img/chevron-down.png';
import { getLevel, levels } from '@/lib/courses';

export function generateStaticParams() {
  return levels.map((l) => ({ level: l.slug }));
}

export async function generateMetadata({ params }: PageProps<'/course/[level]'>): Promise<Metadata> {
  const level = getLevel((await params).level);
  return { title: level?.title ?? 'Course' };
}

const benefits = [
  'Kurikulum standar industri global',
  'Belajar fleksibel sesuai jadwal anda',
  'Dapatkan kesempatan untuk berkarier dan belajar di Jepang',
];

export default async function CoursePage({ params }: PageProps<'/course/[level]'>) {
  const level = getLevel((await params).level);
  if (!level) notFound();

  return (
    <main className="flex flex-col px-6 pt-28 pb-16 lg:flex-row lg:px-[200px] lg:py-[150px]">
      <div className="flex w-full flex-col lg:w-7/12">
        <Image src={level.banner ?? level.image} alt="" />
        <h1 className="mt-4 mb-4 text-4xl font-bold">{level.title}</h1>
        <p className="mb-4">{level.description ?? level.summary}</p>

        {level.sections ? (
          level.sections.map((s, i) => (
            <details key={s.name} className="group mb-4 rounded-lg border-2 border-brand p-2">
              <summary className="flex cursor-pointer list-none text-2xl font-bold select-none hover:text-brand">
                {s.name}
                <Image className="mt-1.5 ml-2 group-open:rotate-180" src={down} alt="" />
              </summary>
              <p className="mt-2 mb-4">{s.text}</p>
              <ButtonLink href={`/course/${level.slug}/${i + 1}`}>Lanjutkan</ButtonLink>
            </details>
          ))
        ) : (
          <p className="rounded-lg border-2 border-brand p-4 font-bold">
            Materi untuk level ini segera hadir.
          </p>
        )}
      </div>

      <aside className="mt-8 h-fit w-full rounded-lg border-2 border-black text-center tracking-wide lg:mt-0 lg:ml-10 lg:w-[400px] lg:shrink-0">
        <h2 className="bg-brand py-8 text-3xl font-bold text-white">Course Benefit</h2>
        <ul className="list-inside list-disc px-6 py-6 text-start md:px-12">
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="mb-6">
          <ButtonLink href="/register">Daftar Sekarang</ButtonLink>
        </div>
      </aside>
    </main>
  );
}
