export type Example = { word: string; reading: string; meaning: string };
export type KanjiEntry = {
  char: string;
  /** Indonesian meaning; readings and common words come from kanjiapi.dev. */
  meaning: string;
  examples: Example[];
};
export type Lesson = {
  id: number;
  theme: string;
  word: string;
  reading: string;
  meaning: string;
  intro: string;
  kanji: KanjiEntry[];
};

// N3 kanji, grouped by one everyday situation per lesson.
export const n3Lessons: Lesson[] = [
  {
    id: 1,
    theme: 'Parkir',
    word: '駐車場',
    reading: 'ちゅうしゃじょう',
    meaning: 'Tempat parkir',
    intro:
      'Tulisan ini ada di hampir setiap minimarket dan pusat perbelanjaan di Jepang. Tiga kanjinya sering muncul lagi di kata lain.',
    kanji: [
      {
        char: '駐', meaning: 'berhenti, menetap',
        examples: [
          { word: '駐車', reading: 'ちゅうしゃ', meaning: 'parkir (mobil)' },
          { word: '駐輪', reading: 'ちゅうりん', meaning: 'parkir sepeda' },
          { word: '駐在', reading: 'ちゅうざい', meaning: 'ditugaskan di suatu tempat' },
        ],
      },
      {
        char: '車', meaning: 'kendaraan, mobil',
        examples: [
          { word: '電車', reading: 'でんしゃ', meaning: 'kereta listrik' },
          { word: '自動車', reading: 'じどうしゃ', meaning: 'mobil' },
          { word: '車道', reading: 'しゃどう', meaning: 'jalur kendaraan' },
        ],
      },
      {
        char: '場', meaning: 'tempat',
        examples: [
          { word: '会場', reading: 'かいじょう', meaning: 'lokasi acara' },
          { word: '場合', reading: 'ばあい', meaning: 'dalam hal, ketika' },
          { word: '入場', reading: 'にゅうじょう', meaning: 'masuk ke tempat' },
        ],
      },
    ],
  },
  {
    id: 2,
    theme: 'Transportasi umum',
    word: '急行',
    reading: 'きゅうこう',
    meaning: 'Kereta ekspres',
    intro:
      'Saat membaca papan di stasiun, Anda perlu tahu mana kereta yang berhenti di setiap stasiun dan mana yang melewatinya.',
    kanji: [
      {
        char: '乗', meaning: 'naik',
        examples: [
          { word: '乗客', reading: 'じょうきゃく', meaning: 'penumpang' },
          { word: '乗車', reading: 'じょうしゃ', meaning: 'naik kendaraan' },
          { word: '乗り換え', reading: 'のりかえ', meaning: 'pindah jalur, transit' },
        ],
      },
      {
        char: '降', meaning: 'turun, jatuh (hujan)',
        examples: [
          { word: '降車', reading: 'こうしゃ', meaning: 'turun dari kendaraan' },
          { word: '降水', reading: 'こうすい', meaning: 'curah hujan' },
          { word: '以降', reading: 'いこう', meaning: 'setelah, sejak' },
        ],
      },
      {
        char: '急', meaning: 'mendesak, cepat',
        examples: [
          { word: '急行', reading: 'きゅうこう', meaning: 'kereta ekspres' },
          { word: '特急', reading: 'とっきゅう', meaning: 'ekspres terbatas' },
          { word: '急用', reading: 'きゅうよう', meaning: 'urusan mendesak' },
        ],
      },
    ],
  },
  {
    id: 3,
    theme: 'Di kantor',
    word: '会議室',
    reading: 'かいぎしつ',
    meaning: 'Ruang rapat',
    intro:
      'Pintu ruang rapat biasanya diberi tanda ini. Kanji 会 dan 議 juga akan Anda temui di undangan dan notulen rapat.',
    kanji: [
      {
        char: '会', meaning: 'bertemu, perkumpulan',
        examples: [
          { word: '会社', reading: 'かいしゃ', meaning: 'perusahaan' },
          { word: '会議', reading: 'かいぎ', meaning: 'rapat' },
          { word: '会う', reading: 'あう', meaning: 'bertemu' },
        ],
      },
      {
        char: '議', meaning: 'berunding',
        examples: [
          { word: '議論', reading: 'ぎろん', meaning: 'perdebatan, diskusi' },
          { word: '議長', reading: 'ぎちょう', meaning: 'ketua sidang' },
          { word: '不思議', reading: 'ふしぎ', meaning: 'aneh, ajaib' },
        ],
      },
      {
        char: '室', meaning: 'ruangan',
        examples: [
          { word: '教室', reading: 'きょうしつ', meaning: 'ruang kelas' },
          { word: '室内', reading: 'しつない', meaning: 'di dalam ruangan' },
          { word: '事務室', reading: 'じむしつ', meaning: 'ruang kantor' },
        ],
      },
    ],
  },
  {
    id: 4,
    theme: 'Cuaca',
    word: '天気予報',
    reading: 'てんきよほう',
    meaning: 'Prakiraan cuaca',
    intro:
      'Orang Jepang sering mengecek prakiraan cuaca sebelum keluar rumah. Tiga kanji ini muncul di sana dan di banyak pengumuman.',
    kanji: [
      {
        char: '天', meaning: 'langit, surga',
        examples: [
          { word: '天気', reading: 'てんき', meaning: 'cuaca' },
          { word: '天才', reading: 'てんさい', meaning: 'jenius' },
          { word: '天井', reading: 'てんじょう', meaning: 'langit-langit' },
        ],
      },
      {
        char: '予', meaning: 'sebelumnya, di muka',
        examples: [
          { word: '予定', reading: 'よてい', meaning: 'rencana, jadwal' },
          { word: '予約', reading: 'よやく', meaning: 'reservasi' },
          { word: '予想', reading: 'よそう', meaning: 'perkiraan' },
        ],
      },
      {
        char: '報', meaning: 'kabar, laporan',
        examples: [
          { word: '予報', reading: 'よほう', meaning: 'prakiraan' },
          { word: '報告', reading: 'ほうこく', meaning: 'laporan' },
          { word: '情報', reading: 'じょうほう', meaning: 'informasi' },
        ],
      },
    ],
  },
  {
    id: 5,
    theme: 'Belanja',
    word: '割引',
    reading: 'わりびき',
    meaning: 'Diskon',
    intro:
      'Stiker kuning bertuliskan 割引 biasanya ditempel pada makanan menjelang toko tutup. Kanji 税 berguna untuk membaca struk.',
    kanji: [
      {
        char: '割', meaning: 'membagi, memecah',
        examples: [
          { word: '割合', reading: 'わりあい', meaning: 'perbandingan, persentase' },
          { word: '分割', reading: 'ぶんかつ', meaning: 'pembagian, cicilan' },
          { word: '割れる', reading: 'われる', meaning: 'pecah' },
        ],
      },
      {
        char: '引', meaning: 'menarik',
        examples: [
          { word: '割引', reading: 'わりびき', meaning: 'diskon' },
          { word: '引っ越し', reading: 'ひっこし', meaning: 'pindah rumah' },
          { word: '引力', reading: 'いんりょく', meaning: 'gaya tarik' },
        ],
      },
      {
        char: '税', meaning: 'pajak',
        examples: [
          { word: '税金', reading: 'ぜいきん', meaning: 'pajak' },
          { word: '消費税', reading: 'しょうひぜい', meaning: 'pajak konsumsi' },
          { word: '免税', reading: 'めんぜい', meaning: 'bebas pajak' },
        ],
      },
    ],
  },
];

export const getN3Lesson = (id: number) => n3Lessons.find((l) => l.id === id);
