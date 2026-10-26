import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ProfileForm } from '@/components/profile-form';
import { requireUser } from '@/lib/auth';

export const metadata: Metadata = { title: 'Edit Profile' };

export default function EditProfilePage() {
  return (
    <main className="mx-[300px] mt-28 mb-6 rounded-xl border-2 border-black px-12 py-8 max-lg:mx-4">
      <h1 className="mb-12 text-xl font-bold">Edit Profile Pengguna</h1>
      <Suspense fallback={<div className="h-[600px]" />}>
        <Form />
      </Suspense>
    </main>
  );
}

async function Form() {
  const user = await requireUser();
  return <ProfileForm user={user} />;
}
