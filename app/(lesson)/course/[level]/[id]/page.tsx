import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import back from '@/assets/img/back.svg';
import { getLevel } from '@/lib/courses';

export const metadata: Metadata = { title: 'Materi' };

const lessons = [1, 2, 3, 4, 5];

// Sample content: the real lesson data is not built yet.
const examples = Array.from({ length: 3 }, () => ({ word: '駐車', reading: 'ちゅうしゃ', meaning: 'Parkir' }));

export function generateStaticParams() {
  return lessons.map((id) => ({ level: 'n3', id: String(id) }));
}

export default async function Lesson({ params }: PageProps<'/course/[level]/[id]'>) {
  const { level: slug, id } = await params;
  const level = getLevel(slug);
  if (!level?.sections || !lessons.includes(Number(id))) notFound();

  return (
    <>
      <header className="fixed z-10 flex h-20 w-full items-center justify-between bg-white px-12 shadow-md">
        <Link href={`/course/${slug}`} className="flex gap-6">
          <Image src={back} alt="Kembali" />
          <span className="text-lg">Courses</span>
        </Link>
        <p className="p-8 text-lg">Kanji ({id})</p>
      </header>

      <main className="flex">
        <div>
          <div className="flex items-end gap-8 px-40 pt-40">
            <div className="flex flex-col">
              <p className="text-xl font-semibold">ちゅうしゃじょう</p>
              <h1 className="text-6xl font-bold">駐車場</h1>
            </div>
            <p className="text-5xl font-bold">Parking Lot</p>
          </div>
          {lessons.slice(0, 3).map((n) => (
            <section key={n} className="flex items-center gap-8 border-b px-40 py-14">
              <h2 className="text-5xl font-bold">駐</h2>
              <p>チュウ</p>
              <div className="grid grid-flow-col-dense grid-rows-2 gap-4">
                {examples.map((e, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div>
                      <p className="text-4xl font-bold">{e.word}</p>
                      <p className="text-sm">{e.reading}</p>
                    </div>
                    <p>{e.meaning}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <nav className="fixed top-60 right-12 flex flex-col gap-4 rounded-lg border-2 border-black px-16 py-4">
          {lessons.map((n) => (
            <Link
              key={n}
              href={`/course/${slug}/${n}`}
              className={`text-3xl font-bold ${String(n) === id ? 'text-brand' : ''}`}
            >
              {n}
            </Link>
          ))}
        </nav>
      </main>
    </>
  );
}
