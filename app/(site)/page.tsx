import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/button';
import { Container } from '@/components/container';
import heroBg from '@/assets/img/hero-bg.png';
import illust from '@/assets/img/illust-2.png';
import { levels } from '@/lib/courses';

const reasons = [
  {
    title: 'Dimulai dari kanji sehari-hari',
    text: 'Kami memilih kanji dari tempat yang benar-benar Anda temui di Jepang: papan stasiun, struk belanja, dan prakiraan cuaca. Satu pelajaran membahas satu situasi.',
  },
  {
    title: 'Penjelasan dalam bahasa Indonesia',
    text: 'Arti, pola kalimat, dan contoh ditulis dengan bahasa yang kita pakai sehari-hari, jadi tidak perlu menerjemahkan ulang di kepala.',
  },
  {
    title: 'Belajar sesuai waktu Anda',
    text: 'Tidak ada jadwal kelas. Buka satu pelajaran di sela kerja, lanjutkan besok dari bagian yang sama.',
  },
];

const skills = [
  { name: 'Kanji', jp: '漢字', text: 'Bacaan on dan kun, lengkap dengan kata yang sering muncul di berita dan percakapan.', wide: true },
  { name: 'Bunpou', jp: '文法', text: 'Pola kalimat beserta contoh dan artinya.' },
  { name: 'Dokkai', jp: '読解', text: 'Latihan membaca poster, papan petunjuk, dan percakapan.' },
  { name: 'Choukai', jp: '聴解', text: 'Melatih telinga dengan percakapan berkecepatan normal.', wide: true },
];

export default function Home() {
  return (
    <main id="main">
      {/* hero */}
      <section
        className="relative flex min-h-[88dvh] items-center bg-cover bg-center pt-28 pb-20 text-white"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-brand-ink/95 via-brand-ink/70 to-brand-ink/10" />
        <span
          aria-hidden
          className="jp pointer-events-none absolute right-0 bottom-0 hidden translate-y-1/4 text-[22rem] leading-none font-bold text-white/5 select-none lg:block"
        >
          独り言
        </span>
        <Container className="relative">
          <p className="mb-4 text-sm font-medium tracking-widest text-brand-light uppercase">
            Persiapan JLPT N5 sampai N1
          </p>
          <h1 className="max-w-2xl text-4xl font-bold md:text-6xl">
            Belajar bahasa Jepang, satu kanji dalam satu waktu.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            hitorigoto menyusun materi JLPT dari situasi nyata dan menjelaskannya dalam bahasa
            Indonesia. Pelan, jelas, dan bisa Anda ulang sebanyak yang dibutuhkan.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/register" className="px-7 py-3 text-lg">
              Mulai belajar
            </ButtonLink>
            <ButtonLink href="/aboutus" variant="light" className="px-7 py-3 text-lg">
              Kenali JLPT
            </ButtonLink>
          </div>
          <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/20 pt-6">
            {[
              ['5', 'level, N5 sampai N1'],
              ['4', 'kemampuan: kanji, bunpou, dokkai, choukai'],
              ['1', 'situasi nyata di setiap pelajaran'],
            ].map(([n, label]) => (
              <div key={label} className="flex items-baseline gap-3">
                <dt className="text-3xl font-bold tabular-nums">{n}</dt>
                <dd className="max-w-48 text-sm text-white/70">{label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* why */}
      <section className="py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-[5fr_6fr]">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rotate-2 rounded-3xl bg-cream" />
            <Image
              src={illust}
              alt="Ilustrasi seseorang belajar bahasa Jepang di depan laptop"
              className="mx-auto h-auto w-full max-w-md select-none"
              draggable={false}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Kenapa belajar di sini</h2>
            <p className="mt-4 max-w-prose text-dark/70">
              Banyak orang berhenti di tengah jalan karena materinya terasa jauh dari kehidupan.
              Kami mencoba sebaliknya.
            </p>
            <ol className="mt-10 space-y-8">
              {reasons.map((r, i) => (
                <li key={r.title} className="flex gap-5">
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white tabular-nums">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="mt-1 text-dark/70">{r.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* skills */}
      <section className="bg-cream py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Empat kemampuan yang diuji JLPT</h2>
            <p className="mt-4 text-dark/70">
              Setiap level memiliki empat bagian materi yang bisa dipelajari secara terpisah.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {skills.map((s, i) => (
              <article
                key={s.name}
                className={`group relative overflow-hidden rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  i === 0 ? 'bg-brand text-white' : 'bg-white'
                } ${s.wide ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
                <span
                  aria-hidden
                  className={`jp absolute -right-2 -bottom-6 text-8xl font-bold select-none ${
                    i === 0 ? 'text-white/10' : 'text-brand/10'
                  }`}
                >
                  {s.jp}
                </span>
                <h3 className="text-2xl font-bold">{s.name}</h3>
                <p className={`relative mt-2 max-w-xs ${i === 0 ? 'text-white/85' : 'text-dark/70'}`}>
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* levels */}
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[4fr_7fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Pilih level Anda</h2>
            <p className="mt-4 text-dark/70">
              Belum yakin mulai dari mana? Kalau baru mengenal hiragana dan katakana, mulai dari N5.
            </p>
            <ButtonLink href="/course" variant="outline" className="mt-8">
              Lihat semua course
            </ButtonLink>
          </div>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {levels.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/course/${l.slug}`}
                  className="group flex items-center gap-6 py-5 transition hover:bg-cream/60 sm:px-4"
                >
                  <span className="w-14 text-3xl font-bold text-brand tabular-nums">
                    {l.slug.toUpperCase()}
                  </span>
                  <span className="flex-1 text-sm text-dark/70">{l.summary}</span>
                  <span aria-hidden className="text-brand transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* cta */}
      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-brand px-8 py-14 text-center text-white md:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
              Siap membuka pelajaran pertama?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Buat akun dalam satu menit, lalu lanjutkan belajar kapan pun Anda sempat.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/register"
                className="rounded-xl bg-white px-7 py-3 font-medium text-brand-ink transition hover:bg-cream active:scale-[0.98]"
              >
                Buat akun
              </Link>
              <Link
                href="/login"
                className="rounded-xl border-2 border-white/60 px-7 py-3 font-medium transition hover:bg-white/10 active:scale-[0.98]"
              >
                Saya sudah punya akun
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
