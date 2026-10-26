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
    <main className="flex px-[200px] py-[150px] max-lg:flex-col max-lg:px-8 max-lg:pt-28">
      <div className="flex w-7/12 flex-col max-lg:w-full">
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

      <aside className="ml-10 h-fit w-[400px] rounded-lg border-2 border-black text-center tracking-wide max-lg:mx-0 max-lg:mt-8 max-lg:w-full">
        <h2 className="bg-brand py-8 text-3xl font-bold text-white">Course Benefit</h2>
        <ul className="list-inside list-disc px-12 py-6 text-start">
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
