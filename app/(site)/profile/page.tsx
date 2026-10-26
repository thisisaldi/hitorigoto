import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Avatar } from '@/components/avatar';
import { ButtonLink } from '@/components/button';
import { requireUser } from '@/lib/auth';

export const metadata: Metadata = { title: 'My Profile' };

export default function ProfilePage() {
  return (
    <main>
      <Suspense fallback={<div className="h-[500px] bg-cream" />}>
        <ProfileHero />
      </Suspense>
      <section className="p-6 lg:p-[72px]">
        <h2 className="text-2xl font-bold">Latest Activity</h2>
        <p className="mt-6 text-center text-gray-500">Belum ada aktivitas.</p>
      </section>
    </main>
  );
}

async function ProfileHero() {
  const user = await requireUser();
  const subtitle = [user.job, user.organization].filter(Boolean).join(' at ');

  return (
    <div className="flex flex-col items-start gap-10 bg-cream px-6 pt-28 pb-16 lg:flex-row lg:px-[150px] lg:pt-[120px] lg:pb-20">
      <Avatar
        avatarId={user.avatarId}
        size={300}
        className="max-w-full rounded-full border-2 border-[#252525]"
      />
      <div className="flex min-h-[300px] flex-col justify-between gap-6">
        <div className="flex flex-col gap-4 text-xs">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">{user.fullName || user.username}</h1>
            {subtitle && <h4>{subtitle}</h4>}
            {user.joinedYear && <span className="text-gray-400">Joined Since {user.joinedYear}</span>}
          </div>
          {user.about && (
            <div>
              <h3 className="font-bold">About Me</h3>
              <p>{user.about}</p>
            </div>
          )}
        </div>
        <div>
          <ButtonLink href="/editprofile">Edit Profile</ButtonLink>
        </div>
      </div>
    </div>
  );
}
