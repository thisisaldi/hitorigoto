import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import back from '@/assets/img/back.svg';
import { Container } from '@/components/container';
import { getKanjiInfo } from '@/lib/kanji-api';
import { getN3Lesson, n3Lessons } from '@/lib/lessons';

export function generateStaticParams() {
  return n3Lessons.map((l) => ({ level: 'n3', id: String(l.id) }));
}

export async function generateMetadata({ params }: PageProps<'/course/[level]/[id]'>): Promise<Metadata> {
  const { id } = await params;
  const lesson = getN3Lesson(Number(id));
  return { title: lesson ? `${lesson.word}: ${lesson.meaning}` : 'Materi' };
}

export default async function Lesson({ params }: PageProps<'/course/[level]/[id]'>) {
  const { level, id } = await params;
  const lesson = level === 'n3' ? getN3Lesson(Number(id)) : undefined;
  if (!lesson) notFound();

  const info = await Promise.all(lesson.kanji.map((k) => getKanjiInfo(k.char)));
  const prev = getN3Lesson(lesson.id - 1);
  const next = getN3Lesson(lesson.id + 1);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white/85 backdrop-blur-md">
        <Container className="flex h-16 max-w-7xl items-center justify-between">
          <Link href="/course/n3" className="flex items-center gap-3 transition hover:text-brand">
            <Image src={back} alt="" />
            <span className="font-medium">JLPT N3</span>
          </Link>
          <p className="text-sm text-dark/60">
            Kanji · pelajaran <span className="tabular-nums">{lesson.id}</span> dari{' '}
            <span className="tabular-nums">{n3Lessons.length}</span>
          </p>
        </Container>
      </header>

      <main id="main" className="pt-16 pb-28 lg:pb-16">
        <Container className="grid max-w-7xl gap-12 lg:grid-cols-[1fr_16rem]">
          <article className="min-w-0">
            <section className="bg-cream -mx-6 px-6 py-14 md:mx-0 md:rounded-3xl md:px-12 md:py-16 lg:mt-8">
              <p className="text-sm font-medium tracking-widest text-brand uppercase">
                Pelajaran {lesson.id} · {lesson.theme}
              </p>
              <p className="jp mt-6 text-lg text-dark/70">{lesson.reading}</p>
              <h1 className="jp text-6xl font-bold md:text-8xl">{lesson.word}</h1>
              <p className="mt-3 text-2xl font-semibold text-brand-dark">{lesson.meaning}</p>
              <p className="mt-6 max-w-xl text-dark/70">{lesson.intro}</p>
            </section>

            <div className="mt-12 space-y-6">
              {lesson.kanji.map((k, i) => {
                const api = info[i];
                const curated = new Set(k.examples.map((e) => e.word));
                const more = api?.words.filter((w) => !curated.has(w.word)).slice(0, 4) ?? [];
                return (
                  <section
                    key={k.char}
                    className="grid gap-6 rounded-2xl border border-black/10 p-6 transition hover:border-brand/40 hover:shadow-soft md:grid-cols-[10rem_1fr] md:p-8"
                  >
                    <div>
                      <p className="jp text-8xl leading-none font-bold text-brand">{k.char}</p>
                      <p className="mt-4 font-medium">{k.meaning}</p>
                      {api && (
                        <dl className="jp mt-3 space-y-1 text-sm">
                          {api.on.length > 0 && (
                            <div>
                              <dt className="inline text-dark/50">On </dt>
                              <dd className="inline">{api.on.join('、')}</dd>
                            </div>
                          )}
                          {api.kun.length > 0 && (
                            <div>
                              <dt className="inline text-dark/50">Kun </dt>
                              <dd className="inline">{api.kun.join('、')}</dd>
                            </div>
                          )}
                          <div className="font-sans text-xs text-dark/50">
                            {api.strokes} goresan
                            {api.frequencyRank && ` · peringkat ${api.frequencyRank} di koran`}
                          </div>
                        </dl>
                      )}
                    </div>
                    <div>
                      <ul className="grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                        {k.examples.map((e) => (
                          <li key={e.word} className="rounded-xl bg-cream/70 p-4">
                            <p className="jp text-xs text-dark/60">{e.reading}</p>
                            <p className="jp text-2xl font-bold">{e.word}</p>
                            <p className="mt-1 text-sm">{e.meaning}</p>
                          </li>
                        ))}
                      </ul>
                      {more.length > 0 && (
                        <div className="mt-5">
                          <h3 className="text-xs font-semibold tracking-wide text-dark/50 uppercase">
                            Kata umum lainnya
                          </h3>
                          <ul className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                            {more.map((w) => (
                              <li key={w.word}>
                                <p className="whitespace-nowrap">
                                  <span className="jp font-bold">{w.word}</span>{' '}
                                  <span className="jp text-xs text-dark/50">{w.reading}</span>
                                </p>
                                <p lang="en" className="line-clamp-2 text-xs text-dark/70">
                                  {w.gloss}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>

            <p className="mt-8 text-xs text-dark/50">
              Bacaan dan kata umum bersumber dari{' '}
              <a href="https://kanjiapi.dev" className="underline hover:text-brand">
                kanjiapi.dev
              </a>{' '}
              (KANJIDIC dan JMdict, EDRDG). Arti kata umum dalam bahasa Inggris.
            </p>

            <nav aria-label="Pelajaran" className="mt-12 flex justify-between gap-4">
              {prev ? (
                <Link
                  href={`/course/n3/${prev.id}`}
                  className="rounded-xl border-2 border-brand px-5 py-2.5 font-medium text-brand transition hover:bg-brand hover:text-white"
                >
                  ← {prev.theme}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/course/n3/${next.id}`}
                  className="rounded-xl bg-brand px-5 py-2.5 font-medium text-white shadow-soft transition hover:bg-brand-dark"
                >
                  {next.theme} →
                </Link>
              ) : (
                <Link
                  href="/course/n3"
                  className="rounded-xl bg-brand px-5 py-2.5 font-medium text-white shadow-soft transition hover:bg-brand-dark"
                >
                  Selesai, kembali ke N3
                </Link>
              )}
            </nav>
          </article>

          <aside className="fixed inset-x-0 bottom-0 z-20 border-t border-black/10 bg-white lg:sticky lg:top-28 lg:h-fit lg:rounded-2xl lg:border lg:p-4">
            <p className="mb-3 hidden px-2 text-sm font-semibold lg:block">Semua pelajaran</p>
            <ol className="flex justify-center gap-1 overflow-x-auto p-2 lg:flex-col lg:p-0">
              {n3Lessons.map((l) => (
                <li key={l.id}>
                  <Link
                    href={`/course/n3/${l.id}`}
                    aria-current={l.id === lesson.id ? 'page' : undefined}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 whitespace-nowrap transition ${
                      l.id === lesson.id ? 'bg-brand text-white' : 'hover:bg-cream'
                    }`}
                  >
                    <span className="font-bold tabular-nums">{l.id}</span>
                    <span className="hidden text-sm lg:inline">{l.theme}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </main>
    </>
  );
}
