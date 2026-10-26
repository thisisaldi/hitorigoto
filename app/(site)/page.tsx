import Image from 'next/image';
import { ButtonLink } from '@/components/button';
import heroBg from '@/assets/img/hero-bg.png';
import illust from '@/assets/img/illust-2.png';

export default function Home() {
  return (
    <>
      <section
        className="flex min-h-screen items-center bg-cover bg-center px-6 pt-28 pb-16 lg:bg-fixed lg:px-[200px]"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="flex w-full flex-col lg:ml-auto lg:w-[576px] gap-2 text-white">
          <h1 className="text-3xl font-bold md:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.
          </h1>
          <p className="my-3 w-[90%] break-words">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veritatis! lorem
          </p>
          <div className="flex flex-wrap gap-2.5">
            <ButtonLink href="/register" className="text-lg md:text-2xl">
              Register Now
            </ButtonLink>
            <ButtonLink href="/aboutus" variant="outline" className="text-lg md:text-2xl">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:gap-[150px] lg:px-[150px] lg:py-[100px]">
        <Image
          src={illust}
          alt="Web Course"
          className="pointer-events-none h-auto w-full max-w-[500px] select-none"
          draggable={false}
        />
        <div className="flex w-full flex-col gap-2 lg:w-[576px] lg:text-right">
          <h2 className="text-3xl font-bold md:text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.
          </h2>
          <p className="break-words">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia dolorum quod
            deleniti a vero pariatur ratione fugiat laudantium delectus, ad veniam, dicta natus
            dignissimos! Id hic officiis labore voluptate reiciendis minima soluta, temporibus
            numquam. Eveniet quidem harum, et adipisci praesentium debitis illo quas sunt nemo ipsa
            fuga dolor necessitatibus?
          </p>
        </div>
      </section>
    </>
  );
}
