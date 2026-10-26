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
      <section className="flex bg-cream px-[200px] py-[100px] max-lg:flex-col max-lg:px-8">
        <div className="flex w-[500px] flex-col items-start gap-4 py-[200px] max-lg:w-full max-lg:py-16">
          <h1 className="mb-4 text-3xl font-bold">Mulai kursus, di mana saja dan kapan saja!</h1>
          <p>
            Pilih Course sesuai dengan kemampuan Anda demi proses belajar yang menyenangkan.
          </p>
          <ButtonLink href="#courses">Pilih Course</ButtonLink>
        </div>
        <Image className="ml-[100px] w-[600px] max-lg:ml-0 max-lg:w-full" src={hero} alt="" />
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
