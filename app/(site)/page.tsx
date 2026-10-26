import Image from 'next/image';
import { ButtonLink } from '@/components/button';
import heroBg from '@/assets/img/hero-bg.png';
import illust from '@/assets/img/illust-2.png';

export default function Home() {
  return (
    <>
      <section
        className="flex h-screen items-center bg-cover bg-fixed bg-center px-[200px] py-[100px] max-lg:px-8"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="ml-auto flex w-[576px] flex-col gap-2 text-white">
          <h1 className="text-4xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.
          </h1>
          <p className="my-3 w-[90%] break-words">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veritatis! lorem
          </p>
          <div className="flex gap-2.5">
            <ButtonLink href="/register" className="text-2xl">
              Register Now
            </ButtonLink>
            <ButtonLink href="/aboutus" variant="outline" className="text-2xl">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="flex items-center gap-[150px] px-[150px] py-[100px] max-lg:flex-col max-lg:px-8">
        <Image
          src={illust}
          alt="Web Course"
          className="w-[500px] pointer-events-none select-none"
          draggable={false}
        />
        <div className="flex w-[576px] flex-col gap-2 text-right max-lg:w-full">
          <h2 className="text-4xl font-bold">
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
