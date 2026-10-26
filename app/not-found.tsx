import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Page tidak ditemukan.</h1>
      <p>404 Not Found.</p>
      <Link href="/" className="mt-4 text-brand underline">
        Kembali ke beranda
      </Link>
    </main>
  );
}
