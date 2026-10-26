import 'server-only';
import { cache } from 'react';
import { redirect } from 'next/navigation';
import { connectDB } from './db';
import { User } from './models/user';
import { getSessionUserId } from './session';

export type CurrentUser = {
  id: string;
  username: string;
  email: string;
  avatarId: string | null;
  fullName: string;
  gender: string;
  birthDate: string; // yyyy-mm-dd
  job: string;
  organization: string;
  phoneNumber: string;
  about: string;
  joinedYear: number | null;
};

/** Current user from the session cookie, or null. Deduped per request. */
export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
  const id = await getSessionUserId();
  if (!id) return null;

  await connectDB();
  const doc = await User.findById(id).select('-password').lean();
  if (!doc) return null;

  const img = doc.profile_img?.id;
  return {
    id,
    username: doc.username,
    email: doc.email,
    avatarId: img ? String(img) : null,
    fullName: doc.bio?.full_name ?? '',
    gender: doc.bio?.gender ?? '',
    birthDate: doc.bio?.birth_date ? doc.bio.birth_date.toISOString().slice(0, 10) : '',
    job: doc.bio?.job ?? '',
    organization: doc.bio?.organization ?? '',
    phoneNumber: doc.bio?.phone_number ?? '',
    about: doc.bio?.about ?? '',
    joinedYear: doc.createdAt ? new Date(doc.createdAt).getFullYear() : null,
  };
});

/** For pages and actions that need a logged-in user. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) redirect('/login');
  return user;
}
