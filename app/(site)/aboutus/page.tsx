import type { Metadata } from 'next';
import Image from 'next/image';
import intro from '@/assets/img/jlpt-intro.png';
import history from '@/assets/img/sejarah.png';
import { jlptLevels } from '@/lib/courses';

export const metadata: Metadata = { title: 'Tentang JLPT' };

const steps = [
  ['Periksa tanggal ujian di situs web Japan', 'Educational Exchanges and Services (JEES)'],
  ['Daftar ke MyJLPT di situs web JEES (daftar kapan saja)'],
  ['Terapkan melalui situs web JEES dan bayar biaya aplikasi'],
  ['Terima voucher tes dari JEES'],
  ['Ambil Tes'],
  [
    'Menerima hasil tes dari JEES',
    'Semua peserta ujian di setiap level akan menerima Laporan Skor.',
    'Peserta ujian dapat melihat hasil tes dengan masuk ke MyJLPT.',
    'Peserta ujian yang berhasil akan menerima Certificate of Proficiency.',
  ],
];

export default function About() {
  return (
    <main>
      <section className="flex flex-col justify-between gap-8 px-6 pt-28 pb-12 lg:min-h-[700px] lg:flex-row lg:px-[250px] lg:pt-0 lg:pb-0">
        <div className="flex w-full flex-col lg:w-[550px] lg:justify-center">
          <h1 className="mb-4 text-4xl font-bold tracking-wide">Apa itu JLPT</h1>
          <p>
            JLPT adalah singkatan dari Japanese Language Proficiency Test atau dalam bahasa
            Jepangnya disebut 日本語能力試験 (nihongo nouryoku shiken). Ujian kemampuan bahasa
            Jepang yang ditujukan untuk orang-orang yang memiliki bahasa ibu bukan bahasa Jepang.
          </p>
        </div>
        <Image className="w-full max-w-[300px] self-center" src={intro} alt="" />
      </section>

      <section className="flex flex-col items-center justify-center bg-brand px-6 py-20 text-center text-white">
        <h2 className="mb-10 text-3xl font-bold tracking-wide">Tujuan</h2>
        <p>JLPT diadakan di seluruh dunia untuk mengevaluasi dan</p>
        <p>mengesahkan kemahiran berbahasa Jepang dari penutur asing.</p>
      </section>

      <section className="flex flex-col justify-between gap-8 px-6 py-12 lg:flex-row lg:px-[250px]">
        <Image className="w-full max-w-[300px]" src={history} alt="" />
        <div className="flex w-full flex-col lg:w-[550px]">
          <h2 className="mb-4 text-3xl font-bold tracking-wide">Sejarah JLPT</h2>
          <p>
            JLPT pertama kali diselenggarakan pada tahun 1984 sebagai tanggapan atas meningkatnya
            permintaan sertifikasi bahasa Jepang yang terstandar. Awalnya 7.000 orang mengikuti
            tes. Hingga tahun 2003, JLPT merupakan salah satu syarat bagi orang asing untuk masuk
            universitas Jepang. Sejak 2003, Examination for Japanese University Admission for
            International Students (EJU) digunakan oleh sebagian besar universitas untuk tujuan
            ini; tidak seperti JLPT, yang hanya merupakan ujian pilihan ganda, EJU berisi bagian
            yang mengharuskan peserta ujian menulis dalam bahasa Jepang..
          </p>
        </div>
      </section>

      <section className="mx-4 mt-16 mb-24 flex flex-col items-center gap-5 rounded-xl bg-cream px-6 py-16 shadow-lg lg:mx-[250px] lg:mt-28 lg:px-[120px]">
        <h2 className="text-3xl font-bold tracking-wide">Level JLPT</h2>
        {jlptLevels.map((l) => (
          <div key={l.level} className="w-11/12 border-b border-gray-300 pb-8 last:border-0">
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:gap-24">
              <h3 className="mt-4 h-fit w-[125px] shrink-0 rounded-lg bg-brand px-10 py-8 text-4xl font-bold tracking-wide text-white">
                {l.level}
              </h3>
              <div className="flex flex-col">
                <h4 className="mt-4 text-xl font-bold tracking-wide">Bacaan</h4>
                <p>{l.reading}</p>
                <h4 className="mt-4 text-xl font-bold tracking-wide">Pendengaran</h4>
                <p>{l.listening}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-center bg-cream px-4 py-10">
        <h2 className="text-3xl font-bold tracking-wide">Tahap Pelaksanaan JLPT</h2>
        {steps.map((lines) => (
          <div
            key={lines[0]}
            className="mt-8 w-10/12 rounded-lg bg-brand px-10 py-8 text-center tracking-wide text-white lg:w-4/12"
          >
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
