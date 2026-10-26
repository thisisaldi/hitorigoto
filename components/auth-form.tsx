'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useActionState } from 'react';
import lock from '@/assets/img/lock.svg';
import mail from '@/assets/img/mail.svg';
import user from '@/assets/img/user.svg';
import { login, register, type FormState } from '@/lib/actions';

const fields = {
  username: { icon: user, label: 'Nama pengguna', type: 'text', autoComplete: 'username' },
  email: { icon: mail, label: 'Email', type: 'email', autoComplete: 'email' },
  password: { icon: lock, label: 'Kata sandi', type: 'password', autoComplete: 'current-password' },
} as const;

const copy = {
  login: {
    title: 'Selamat datang kembali',
    subtitle: 'Masuk untuk melanjutkan pelajaran Anda.',
    submit: 'Masuk',
    switchText: 'Belum punya akun?',
    switchLink: 'Daftar',
    switchHref: '/register',
  },
  register: {
    title: 'Buat akun baru',
    subtitle: 'Cukup tiga isian, lalu Anda bisa langsung belajar.',
    submit: 'Daftar',
    switchText: 'Sudah punya akun?',
    switchLink: 'Masuk',
    switchHref: '/login',
  },
};

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const isLogin = mode === 'login';
  const c = copy[mode];
  const [state, action, pending] = useActionState<FormState, FormData>(isLogin ? login : register, {});
  const names = isLogin ? (['username', 'password'] as const) : (['username', 'email', 'password'] as const);

  return (
    <main className="grid min-h-dvh lg:grid-cols-[5fr_6fr]">
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-brand p-12 text-white lg:flex">
        <div className="absolute -right-24 -bottom-24 size-96 rounded-full bg-brand-light/30 blur-3xl" />
        <Link href="/" className="relative text-2xl font-bold tracking-tight">
          hitorigoto
        </Link>
        <div className="relative">
          <p aria-hidden className="jp text-8xl font-bold text-white/20">
            独り言
          </p>
          <blockquote className="mt-6 max-w-sm text-2xl font-semibold leading-snug">
            Bahasa baru tidak dikuasai dalam semalam, tapi bisa dimulai malam ini.
          </blockquote>
          <p className="mt-4 text-sm text-white/70">Hitorigoto berarti bergumam sendiri.</p>
        </div>
      </aside>

      <section className="flex flex-col justify-center px-6 py-12 sm:px-12">
        <div className="mx-auto w-full max-w-sm">
          <Link href="/" className="mb-10 block text-2xl font-bold tracking-tight lg:hidden">
            hitorigoto
          </Link>
          <h1 className="text-3xl font-bold">{c.title}</h1>
          <p className="mt-2 text-dark/70">{c.subtitle}</p>

          <form action={action} className="mt-8 flex flex-col gap-5">
            {names.map((name) => {
              const f = fields[name];
              const errors = state.fieldErrors?.[name];
              return (
                <div key={name}>
                  <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
                    {f.label}
                  </label>
                  <div className="relative">
                    <Image className="absolute top-3.5 left-3.5 opacity-60" src={f.icon} alt="" />
                    <input
                      id={name}
                      name={name}
                      type={f.type}
                      defaultValue={name === 'password' ? undefined : state.values?.[name]}
                      autoComplete={!isLogin && name === 'password' ? 'new-password' : f.autoComplete}
                      required
                      aria-invalid={!!errors}
                      className="w-full rounded-xl border border-black/20 bg-white py-3 pl-12 transition focus:border-brand aria-invalid:border-red-500"
                    />
                  </div>
                  {errors?.map((msg) => (
                    <p key={msg} className="mt-1.5 text-sm text-red-600">
                      {msg}
                    </p>
                  ))}
                </div>
              );
            })}
            {state.error && (
              <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {state.error}
              </p>
            )}
            <button
              disabled={pending}
              className="rounded-xl bg-brand py-3 font-semibold text-white shadow-soft transition hover:bg-brand-dark active:scale-[0.98] disabled:opacity-60"
            >
              {pending ? 'Memproses…' : c.submit}
            </button>
          </form>

          <p className="mt-8 text-sm text-dark/70">
            {c.switchText}{' '}
            <Link href={c.switchHref} className="font-semibold text-brand hover:underline">
              {c.switchLink}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
