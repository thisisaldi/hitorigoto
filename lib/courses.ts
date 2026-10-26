import type { StaticImageData } from 'next/image';
import n1 from '@/assets/img/coursen1.png';
import n2 from '@/assets/img/coursen2.png';
import n3 from '@/assets/img/coursen3.png';
import n4 from '@/assets/img/coursen4.png';
import n5 from '@/assets/img/coursen5.png';
import n3Banner from '@/assets/img/coursen3image.png';

export type Level = {
  slug: string;
  title: string;
  summary: string;
  image: StaticImageData;
  banner?: StaticImageData;
  description?: string;
  sections?: { name: string; text: string }[];
};

// Only N3 has material so far; other levels render a "coming soon" page.
export const levels: Level[] = [
  {
    slug: 'n5',
    title: 'JLPT - N5',
    image: n1,
    summary:
      'JLPT N5 adalah tingkatan paling dasar dalam ujian JLPT, dan sangat cocok untuk para siswa yang baru memulai pembelajaran bahasa Jepang.',
  },
  {
    slug: 'n4',
    title: 'JLPT - N4',
    image: n2,
    summary:
      'JLPT N4 adalah tingkat berikutnya setelah N5 dan merupakan langkah selanjutnya bagi para siswa dalam memperluas pemahaman bahasa Jepang mereka.',
  },
  {
    slug: 'n3',
    title: 'JLPT - N3',
    image: n3,
    banner: n3Banner,
    summary:
      'JLPT N3 merupakan tingkat menengah dalam ujian JLPT. Pada tingkat ini, siswa diharapkan memiliki pemahaman yang lebih mendalam tentang tata bahasa dan kosakata Jepang',
    description:
      'JLPT N3 merupakan tingkat menengah dalam ujian JLPT. Pada tingkat ini, siswa diharapkan memiliki pemahaman yang lebih mendalam tentang tata bahasa dan kosakata Jepang, serta kemampuan berkomunikasi yang lebih baik dalam situasi kehidupan sehari-hari.',
    sections: [
      {
        name: 'Kanji',
        text: 'JLPT N3 terdiri dari sekitar 650 kanji dari berbagai macam kata yang sering dijumpai baik dalam berita maupun kehidupan sehari-hari. Di materi ini kami sudah merangkum dan menggabungkan beberapa kanji berdasarkan tema dalam kehidupan sehingga memudahkan Anda untuk mempelajari kanji N3 dengan cara yang menyenangkan.',
      },
      {
        name: 'Bunpou',
        text: 'Dalam JLPT N3, terdapat 182 pola kalimat yang harus diketahui agar anda bisa lulus. Oleh karena itu, di materi ini kami sudah menyiapkan berbagai macam pola kalimat beserta contoh penggunaan dan artinya sesuai dengan bahasa Indonesia yang sering kita gunakan.',
      },
      {
        name: 'Dokkai',
        text: 'Dokkai merupakan bagian dalam ujian JLPT yang dirasa cukup sulit bagi sebagian besar peserta karena pada bagian ini diperlukan kemampuan untuk membaca kanji, memahami kata, dan memahami kalimat berdasarkan suatu konteks secara utuh. Pada materi ini terdapat berbagai macam percakapan, poster, dan juga papan atau tulisan yang dapat kita temukan di Jepang.',
      },
      {
        name: 'Choukai',
        text: 'JLPT tidak hanya menguji kemampuan peserta untuk membaca dan memahami bahasa Jepang secara tulisan saja, tetapi juga kemampuan mendengar suatu percakapan atau pembicaraan orang Jepang baik di dalam kehidupan sehari-hari maupun di pekerjaan atau sekolah. Materi ini sudah disiapkan bagi Anda yang merasa percaya diri atas kemampuan mendengar percakapan dalam bahasa Jepang ataupun yang ingin melatih kemampuan tersebut.',
      },
    ],
  },
  {
    slug: 'n2',
    title: 'JLPT - N2',
    image: n4,
    summary:
      'JLPT N2 menguji kemampuan siswa dalam memahami teks-teks tulisan dan percakapan dalam bahasa Jepang, baik yang bersifat formal maupun informal.',
  },
  {
    slug: 'n1',
    title: 'JLPT - N1',
    image: n5,
    summary:
      'JLPT N1 merupakan tingkatan tertinggi dalam ujian JLPT. Tahap ini menekankan kepada pemahaman mendalam tentang tata bahasa, kosakata khusus, serta membaca dan menulis.',
  },
];

export const getLevel = (slug: string) => levels.find((l) => l.slug === slug);

export const jlptLevels = [
  {
    level: 'N5',
    reading:
      'Selain hiragana dan katakana, dapat membaca dan memahami frasa, kalimat, paragraf pendek menggunakan kanji dasar.',
    listening:
      'Dapat memahami dan mendengarkan informasi yang diperlukan, Dapat mendengarkan percakapan dengan kecepatan normal tentang topik kehidupan sehari-hari.',
  },
  {
    level: 'N4',
    reading:
      'Dapat memahami dan membaca kalimat yang ditulis tentang topik familiar dengan menggunakan kosa kata dasar kanji.',
    listening: 'Dapat memahami isi dari percakapan sehari-hari apabila berbicara dengan perlahan.',
  },
  {
    level: 'N3',
    reading:
      'Dapat membaca dan memahami sebuah kalimat mengenai isi spesifik yang ditulis tentang tema kehidupan sehari-hari.',
    listening:
      'Dalam kehidupan sehari - hari, dapat mendengarkan percakapan dengan kecepatan normal, dan dapat memahami aliran cerita dan isi utama kalimat.',
  },
  {
    level: 'N2',
    reading:
      'Dapat memahami dengan jelas tesis utama dan isi artikel dalam membaca surat kabar dan majalah.',
    listening:
      'Dalam kehidupan sehari - hari, dapat mendengarkan percakapan dengan kecepatan normal, dan dapat memahami aliran cerita dan isi utama kalimat.',
  },
  {
    level: 'N1',
    reading:
      'Tingkat dapat membaca surat kabar dan mengkritik. Struktur kalimat yang kompleks dan isinya akan ditanya apakah logis dan bisa mengerti. Dan, Anda akan diminta untuk membaca antar baris dari isi kalimat.',
    listening:
      'Mampu mendengarkan dan memahami berbagai jenis percakapan yang diucapkan dengan kecepatan alami, dapat memahami secara detail isi pembicaraan dan karakter, Tingkat ini sesuai dengan pemahaman penuh dari bahasa Jepang.',
  },
];
