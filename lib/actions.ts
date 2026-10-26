'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { AVATAR_MAX_BYTES, AVATAR_TYPES, deleteAvatar, saveAvatar } from './avatar';
import { requireUser } from './auth';
import { connectDB } from './db';
import { User } from './models/user';
import { createSession, deleteSession } from './session';

export type FormState = { error?: string; fieldErrors?: Record<string, string[]> };

const registerSchema = z.object({
  username: z
    .string()
    .min(4, 'Username should be at least 4 characters!')
    .regex(/^[a-zA-Z0-9]+$/, 'Username should not contains any symbols!'),
  email: z.email('Invalid email format!'),
  password: z
    .string()
    .min(6, 'Password should be at least 6 characters!')
    .regex(/[a-z]/, 'Password needs a lowercase letter!')
    .regex(/[A-Z]/, 'Password needs an uppercase letter!')
    .regex(/[0-9]/, 'Password needs a number!'),
});

const profileSchema = z.object({
  fullName: z.string().trim().max(100),
  gender: z.enum(['', 'cowo', 'cewe']),
  birthDate: z.string().regex(/^(\d{4}-\d{2}-\d{2})?$/),
  job: z.string().trim().max(100),
  organization: z.string().trim().max(100),
  phoneNumber: z.string().trim().max(30),
  email: z.email('Invalid email format!'),
  about: z.string().trim().max(250),
});

const str = (fd: FormData, key: string) => String(fd.get(key) ?? '');

export async function register(_: FormState, fd: FormData): Promise<FormState> {
  const parsed = registerSchema.safeParse({
    username: str(fd, 'username'),
    email: str(fd, 'email'),
    password: str(fd, 'password'),
  });
  if (!parsed.success) return { fieldErrors: z.flattenError(parsed.error).fieldErrors };

  const { username, email, password } = parsed.data;
  await connectDB();
  if (await User.exists({ username })) return { fieldErrors: { username: ['Username already exists!'] } };
  if (await User.exists({ email })) return { fieldErrors: { email: ['Email already exists!'] } };

  const user = await User.create({ username, email, password: await bcrypt.hash(password, 10) });
  await createSession(user.id);
  redirect('/');
}

export async function login(_: FormState, fd: FormData): Promise<FormState> {
  const username = str(fd, 'username');
  const password = str(fd, 'password');
  if (!username || !password) return { error: 'Please fill in the username and password!' };

  await connectDB();
  const user = await User.findOne({ username });
  // same message for unknown user and wrong password
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: 'Incorrect username or password!' };
  }

  await createSession(user.id);
  redirect('/');
}

export async function logout() {
  await deleteSession();
  redirect('/');
}

export async function updateProfile(_: FormState, fd: FormData): Promise<FormState> {
  const me = await requireUser();

  const parsed = profileSchema.safeParse({
    fullName: str(fd, 'fullName'),
    gender: str(fd, 'gender'),
    birthDate: str(fd, 'birthDate'),
    job: str(fd, 'job'),
    organization: str(fd, 'organization'),
    phoneNumber: str(fd, 'phoneNumber'),
    email: str(fd, 'email'),
    about: str(fd, 'about'),
  });
  if (!parsed.success) return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  const d = parsed.data;

  await connectDB();
  if (d.email !== me.email && (await User.exists({ email: d.email }))) {
    return { fieldErrors: { email: ['Email already exists!'] } };
  }

  const update: Record<string, unknown> = {
    email: d.email,
    bio: {
      full_name: d.fullName,
      gender: d.gender,
      birth_date: d.birthDate ? new Date(d.birthDate) : undefined,
      job: d.job,
      organization: d.organization,
      phone_number: d.phoneNumber,
      about: d.about,
    },
  };

  const file = fd.get('profileimg');
  if (file instanceof File && file.size > 0) {
    if (!AVATAR_TYPES.includes(file.type)) {
      return { fieldErrors: { profileimg: ['Only PNG or JPEG images are allowed.'] } };
    }
    if (file.size > AVATAR_MAX_BYTES) {
      return { fieldErrors: { profileimg: ['Image must be 2MB or smaller.'] } };
    }
    const saved = await saveAvatar(file);
    update.profile_img = { id: saved.id, filename: saved.filename };
    if (me.avatarId) await deleteAvatar(me.avatarId);
  }

  await User.findByIdAndUpdate(me.id, update);
  redirect('/profile');
}

export async function deleteAccount() {
  const me = await requireUser();
  await connectDB();
  await User.findByIdAndDelete(me.id);
  if (me.avatarId) await deleteAvatar(me.avatarId);
  await deleteSession();
  redirect('/');
}
