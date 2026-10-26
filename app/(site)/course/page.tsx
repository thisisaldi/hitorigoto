import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/button';
import { Container } from '@/components/container';
import { CourseCard } from '@/components/course-card';
import hero from '@/assets/img/course.png';
import { levels } from '@/lib/courses';

export const metadata: Metadata = { title: 'Courses' };

export default function Courses() {
  return (
    <main id="main">
      <section className="bg-cream pt-28 pb-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-widest text-brand uppercase">Courses</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              Mulai belajar kapan saja, dari mana saja.
            </h1>
            <p className="mt-5 max-w-md text-dark/70">
              Pilih level yang sesuai dengan kemampuan Anda. Setiap course berisi kanji, bunpou,
              dokkai, dan choukai yang bisa dipelajari dengan urutan bebas.
            </p>
            <ButtonLink href="#courses" className="mt-8">
              Pilih course
            </ButtonLink>
          </div>
          <Image
            className="h-auto w-full"
            src={hero}
            alt="Ilustrasi siswa belajar online dengan buku dan laptop"
            priority
          />
        </Container>
      </section>

      <section id="courses" className="py-20">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">Course yang tersedia</h2>
            <p className="text-sm text-dark/60">
              Saat ini N3 sudah punya materi. Level lain sedang disusun.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level) => (
              <CourseCard key={level.slug} level={level} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
