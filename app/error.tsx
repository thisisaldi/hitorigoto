'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 px-4 text-center">
      <h1 className="text-2xl font-bold">Halaman gagal dimuat</h1>
      <p>Kami tidak bisa memuat halaman ini. Coba lagi sebentar.</p>
      <button onClick={reset} className="rounded-xl bg-brand px-5 py-2.5 font-medium text-white transition hover:bg-brand-dark">
        Coba lagi
      </button>
    </main>
  );
}
