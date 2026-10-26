import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-cream px-6 text-center">
      <p aria-hidden className="jp text-8xl font-bold text-brand/30">
        迷子
      </p>
      <h1 className="text-3xl font-bold">Halaman tidak ditemukan</h1>
      <p className="max-w-sm text-dark/70">
        Alamat yang Anda buka tidak ada atau sudah dipindahkan. Kode galat: 404.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-xl bg-brand px-6 py-2.5 font-medium text-white shadow-soft transition hover:bg-brand-dark active:scale-[0.98]"
      >
        Kembali ke beranda
      </Link>
    </main>
  );
}
