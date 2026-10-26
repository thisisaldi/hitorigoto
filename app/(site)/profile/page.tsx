import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Avatar } from '@/components/avatar';
import { ButtonLink } from '@/components/button';
import { Container } from '@/components/container';
import { requireUser } from '@/lib/auth';

export const metadata: Metadata = { title: 'Profil saya' };

export default function ProfilePage() {
  return (
    <main id="main">
      <Suspense fallback={<div className="h-[420px] bg-cream" />}>
        <ProfileHero />
      </Suspense>
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold">Aktivitas terbaru</h2>
          <div className="mt-6 rounded-2xl border border-dashed border-brand/40 bg-cream/40 px-6 py-14 text-center">
            <p className="text-lg font-semibold">Belum ada pelajaran yang diselesaikan</p>
            <p className="mx-auto mt-2 max-w-md text-dark/70">
              Riwayat belajar Anda akan muncul di sini. Pelajaran kanji JLPT N3 bisa jadi awal yang baik.
            </p>
            <ButtonLink href="/course/n3" className="mt-6">
              Buka pelajaran pertama
            </ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}

async function ProfileHero() {
  const user = await requireUser();
  const subtitle = [user.job, user.organization].filter(Boolean).join(' di ');

  return (
    <div className="bg-cream pt-28 pb-14">
      <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
        <Avatar
          avatarId={user.avatarId}
          size={220}
          className="rounded-3xl border-4 border-white shadow-soft"
        />
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">{user.fullName || user.username}</h1>
            <p className="mt-1 text-dark/60">@{user.username}</p>
            {subtitle && <p className="mt-3">{subtitle}</p>}
            {user.joinedYear && (
              <p className="mt-1 text-sm text-dark/50">Bergabung sejak {user.joinedYear}</p>
            )}
          </div>
          {user.about ? (
            <div className="max-w-xl">
              <h2 className="text-sm font-semibold tracking-wide text-brand uppercase">Tentang saya</h2>
              <p className="mt-1">{user.about}</p>
            </div>
          ) : (
            <p className="max-w-xl text-sm text-dark/60">
              Tambahkan sedikit cerita tentang diri Anda dan tujuan belajar bahasa Jepang.
            </p>
          )}
          <div>
            <ButtonLink href="/editprofile" variant="outline">
              Ubah profil
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
