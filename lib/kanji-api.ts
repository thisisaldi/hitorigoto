import 'server-only';
import { cacheLife } from 'next/cache';

const BASE = 'https://kanjiapi.dev/v1';

export type KanjiInfo = {
  on: string[];
  kun: string[];
  strokes: number;
  /** Rank in Mainichi Shimbun frequency list (1 = most common), if listed. */
  frequencyRank: number | null;
  /** Common words using the kanji; glosses are English (JMdict). */
  words: { word: string; reading: string; gloss: string }[];
};

type RawKanji = {
  on_readings: string[];
  kun_readings: string[];
  stroke_count: number;
  freq_mainichi_shinbun: number | null;
};
type RawWord = {
  meanings: { glosses: string[] }[];
  variants: { written: string; pronounced: string; priorities: string[] }[];
};

// KANJIDIC marks okurigana with '.' and affixes with '-': の.る -> の(る)
const readable = (r: string) => r.replace(/^-|-$/g, '').replace(/\.(.+)$/, '($1)');

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}/${path}`);
  if (!res.ok) throw new Error(`kanjiapi ${path}: ${res.status}`);
  return res.json();
}

// Cached for weeks: the dataset is static. A thrown error is not cached, so a
// failed request is retried on the next render instead of being stored.
async function fetchKanjiInfo(char: string): Promise<KanjiInfo> {
  'use cache';
  cacheLife('weeks');

  const [kanji, words] = await Promise.all([
    getJson<RawKanji>(`kanji/${encodeURIComponent(char)}`),
    getJson<RawWord[]>(`words/${encodeURIComponent(char)}`),
  ]);

  // keep common words only (news1/ichi1), most frequent first (nfXX: lower = more common)
  const rank = (p: string[]) => Number(p.find((x) => /^nf\d+$/.test(x))?.slice(2) ?? 99);
  const common = words
    .flatMap((w) =>
      w.variants
        .filter((v) => v.written.length > 1 && v.priorities.some((p) => p === 'news1' || p === 'ichi1'))
        .slice(0, 1)
        .map((v) => ({
          word: v.written,
          reading: v.pronounced,
          gloss: w.meanings[0]?.glosses.slice(0, 2).join('; ') ?? '',
          rank: rank(v.priorities),
        })),
    )
    .sort((a, b) => a.rank - b.rank);

  return {
    on: kanji.on_readings,
    kun: kanji.kun_readings.map(readable),
    strokes: kanji.stroke_count,
    frequencyRank: kanji.freq_mainichi_shinbun,
    words: common.slice(0, 12).map(({ word, reading, gloss }) => ({ word, reading, gloss })),
  };
}

/** Kanji facts from kanjiapi.dev, or null if the API is unreachable. */
export async function getKanjiInfo(char: string): Promise<KanjiInfo | null> {
  try {
    return await fetchKanjiInfo(char);
  } catch (err) {
    console.error(err);
    return null;
  }
}
