'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 px-4 text-center">
      <h1 className="text-2xl font-bold">Terjadi kesalahan.</h1>
      <p>Silakan coba lagi beberapa saat.</p>
      <button onClick={reset} className="rounded-lg bg-brand px-4 py-1.5 text-white hover:bg-brand-light">
        Coba lagi
      </button>
    </main>
  );
}
