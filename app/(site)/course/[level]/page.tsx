import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/button';
import { Container } from '@/components/container';
import down from '@/assets/img/chevron-down.png';
import { getLevel, levels } from '@/lib/courses';
import { n3Lessons } from '@/lib/lessons';

export function generateStaticParams() {
  return levels.map((l) => ({ level: l.slug }));
}

export async function generateMetadata({ params }: PageProps<'/course/[level]'>): Promise<Metadata> {
  const level = getLevel((await params).level);
  return { title: level?.title ?? 'Course' };
}

const benefits = [
  'Kurikulum mengikuti kisi-kisi JLPT',
  'Belajar fleksibel sesuai jadwal Anda',
  'Persiapan untuk bekerja atau kuliah di Jepang',
];

export default async function CoursePage({ params }: PageProps<'/course/[level]'>) {
  const level = getLevel((await params).level);
  if (!level) notFound();

  return (
    <main id="main" className="pt-28 pb-20">
      <Container>
        <Link href="/course" className="text-sm text-dark/60 transition hover:text-brand">
          ← Semua course
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <Image
              className="aspect-[16/9] w-full rounded-3xl object-cover"
              src={level.banner ?? level.image}
              alt={`Suasana belajar ${level.title}`}
              priority
            />
            <h1 className="mt-8 text-4xl font-bold">{level.title}</h1>
            <p className="mt-4 max-w-prose text-dark/70">{level.description ?? level.summary}</p>

            <div className="mt-10 space-y-3">
              {level.sections ? (
                level.sections.map((s) => (
                  <details
                    key={s.name}
                    className="group rounded-2xl border border-black/10 p-5 transition open:border-brand/40 open:bg-cream/50"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold select-none">
                      {s.name}
                      <Image className="transition group-open:rotate-180" src={down} alt="" />
                    </summary>
                    <p className="mt-3 max-w-prose text-dark/70">{s.text}</p>
                    {s.name === 'Kanji' ? (
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {n3Lessons.map((l) => (
                          <li key={l.id}>
                            <Link
                              href={`/course/n3/${l.id}`}
                              className="flex items-center gap-4 rounded-xl bg-white px-4 py-3 ring-1 ring-black/5 transition hover:ring-brand"
                            >
                              <span className="jp text-xl font-bold text-brand">{l.word}</span>
                              <span className="text-sm text-dark/70">{l.meaning}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-sm font-medium text-brand">Materi sedang disusun.</p>
                    )}
                  </details>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-brand/50 bg-cream/50 p-8">
                  <h2 className="text-xl font-bold">Materi level ini sedang disusun</h2>
                  <p className="mt-2 text-dark/70">
                    Sambil menunggu, Anda bisa mencoba pelajaran kanji di JLPT N3.
                  </p>
                  <ButtonLink href="/course/n3" className="mt-5">
                    Buka JLPT N3
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>

          <aside className="h-fit overflow-hidden rounded-3xl ring-1 ring-black/10 lg:sticky lg:top-28">
            <h2 className="bg-brand px-6 py-5 text-xl font-bold text-white">Yang Anda dapatkan</h2>
            <ul className="space-y-3 p-6">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden className="mt-1 text-brand">
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-6">
              <ButtonLink href="/register" className="w-full">
                Daftar sekarang
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
