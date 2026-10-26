import type { Metadata } from 'next';
import Image from 'next/image';
import { ButtonLink } from '@/components/button';
import { CourseCard } from '@/components/course-card';
import hero from '@/assets/img/course.png';
import { levels } from '@/lib/courses';

export const metadata: Metadata = { title: 'Courses' };

export default function Courses() {
  return (
    <main>
      <section className="flex flex-col bg-cream px-6 pt-28 pb-12 lg:flex-row lg:px-[200px] lg:py-[100px]">
        <div className="flex w-full flex-col items-start gap-4 py-8 lg:w-[500px] lg:justify-center">
          <h1 className="mb-4 text-3xl font-bold">Mulai kursus, di mana saja dan kapan saja!</h1>
          <p>
            Pilih Course sesuai dengan kemampuan Anda demi proses belajar yang menyenangkan.
          </p>
          <ButtonLink href="#courses">Pilih Course</ButtonLink>
        </div>
        <Image className="w-full lg:ml-[100px] lg:w-[600px]" src={hero} alt="" />
      </section>

      <section id="courses" className="my-12">
        <h2 className="mb-4 text-center text-2xl font-bold">Course yang tersedia</h2>
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {levels.map((level) => (
            <CourseCard key={level.slug} level={level} />
          ))}
        </div>
      </section>
    </main>
  );
}
