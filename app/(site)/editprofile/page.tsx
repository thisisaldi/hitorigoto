import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { Container } from '@/components/container';
import { ProfileForm } from '@/components/profile-form';
import { requireUser } from '@/lib/auth';

export const metadata: Metadata = { title: 'Ubah profil' };

export default function EditProfilePage() {
  return (
    <main id="main" className="pt-28 pb-20">
      <Container className="max-w-3xl">
        <Link href="/profile" className="text-sm text-dark/60 transition hover:text-brand">
          ← Kembali ke profil
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Ubah profil</h1>
        <p className="mt-2 text-dark/70">Data ini hanya tampil di halaman profil Anda.</p>
        <div className="mt-10 rounded-3xl border border-black/10 p-6 md:p-10">
          <Suspense fallback={<div className="h-[600px]" />}>
            <Form />
          </Suspense>
        </div>
      </Container>
    </main>
  );
}

async function Form() {
  const user = await requireUser();
  return <ProfileForm user={user} />;
}
