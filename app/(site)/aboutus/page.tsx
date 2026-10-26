import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/container';
import intro from '@/assets/img/jlpt-intro.png';
import history from '@/assets/img/sejarah.png';
import { jlptLevels } from '@/lib/courses';

export const metadata: Metadata = {
  title: 'Tentang JLPT',
  description: 'Apa itu JLPT, tujuan ujiannya, sejarahnya, level N5 sampai N1, dan tahapan pendaftarannya.',
};

const steps = [
  { title: 'Periksa jadwal ujian', text: 'Tanggal ujian diumumkan di situs Japan Educational Exchanges and Services (JEES).' },
  { title: 'Daftar ke MyJLPT', text: 'Buat akun di situs JEES. Pendaftaran akun bisa dilakukan kapan saja.' },
  { title: 'Ajukan dan bayar biaya ujian', text: 'Isi aplikasi melalui situs JEES, lalu bayar biaya pendaftarannya.' },
  { title: 'Terima voucher tes', text: 'JEES mengirimkan voucher yang Anda bawa pada hari ujian.' },
  { title: 'Ikuti tes', text: 'Datang ke lokasi ujian sesuai level yang Anda pilih.' },
  {
    title: 'Terima hasil tes',
    text: 'Semua peserta menerima Laporan Skor, dan hasilnya bisa dilihat dengan masuk ke MyJLPT. Peserta yang lulus mendapat Certificate of Proficiency.',
  },
];

export default function About() {
  return (
    <main id="main">
      <section className="pt-28 pb-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[6fr_5fr]">
          <div>
            <p className="text-sm font-medium tracking-widest text-brand uppercase">JLPT</p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Apa itu JLPT?</h1>
            <p className="mt-6 max-w-xl text-lg text-dark/75">
              JLPT adalah singkatan dari Japanese Language Proficiency Test, atau dalam bahasa
              Jepangnya{' '}
              <span className="jp font-medium text-dark">日本語能力試験</span> (nihongo nouryoku
              shiken). Ujian ini mengukur kemampuan bahasa Jepang bagi orang yang bahasa ibunya
              bukan bahasa Jepang.
            </p>
          </div>
          <Image
            className="mx-auto h-auto w-full max-w-sm rounded-3xl"
            src={intro}
            alt="Peserta belajar bahasa Jepang"
            priority
          />
        </Container>
      </section>

      <section className="bg-brand py-20 text-white">
        <Container className="max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Tujuan</h2>
          <p className="mt-5 text-lg text-white/85">
            JLPT diadakan di seluruh dunia untuk mengevaluasi dan mengesahkan kemahiran berbahasa
            Jepang dari penutur asing.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[4fr_7fr]">
          <Image
            className="mx-auto h-auto w-full max-w-xs rounded-3xl lg:mx-0"
            src={history}
            alt="Ilustrasi sejarah JLPT"
          />
          <div>
            <h2 className="text-3xl font-bold">Sejarah JLPT</h2>
            <p className="mt-5 max-w-prose text-dark/75">
              JLPT pertama kali diselenggarakan pada tahun 1984 sebagai tanggapan atas meningkatnya
              permintaan sertifikasi bahasa Jepang yang terstandar. Awalnya 7.000 orang mengikuti
              tes.
            </p>
            <p className="mt-4 max-w-prose text-dark/75">
              Hingga tahun 2003, JLPT merupakan salah satu syarat bagi orang asing untuk masuk
              universitas Jepang. Sejak 2003, Examination for Japanese University Admission for
              International Students (EJU) digunakan oleh sebagian besar universitas untuk tujuan
              ini. Tidak seperti JLPT yang hanya berupa pilihan ganda, EJU memiliki bagian yang
              mengharuskan peserta menulis dalam bahasa Jepang.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container>
          <h2 className="text-3xl font-bold">Level JLPT</h2>
          <p className="mt-3 max-w-xl text-dark/70">
            Ada lima level. N5 adalah yang paling dasar, dan N1 yang paling tinggi.
          </p>
          <ol className="mt-12 space-y-4">
            {jlptLevels.map((l) => (
              <li
                key={l.level}
                className="grid gap-6 rounded-2xl bg-white p-6 shadow-soft md:grid-cols-[7rem_1fr_1fr] md:p-8"
              >
                <p className="text-5xl font-bold text-brand">{l.level}</p>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-brand uppercase">Bacaan</h3>
                  <p className="mt-2 text-dark/80">{l.reading}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-brand uppercase">
                    Pendengaran
                  </h3>
                  <p className="mt-2 text-dark/80">{l.listening}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold">Tahap pelaksanaan JLPT</h2>
          <ol className="mt-12 border-l-2 border-brand/30">
            {steps.map((s, i) => (
              <li key={s.title} className="relative pb-10 pl-10 last:pb-0">
                <span className="absolute top-0 -left-[19px] flex size-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white tabular-nums ring-4 ring-white">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-dark/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </main>
  );
}
