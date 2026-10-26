'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useActionState } from 'react';
import lock from '@/assets/img/lock.svg';
import mail from '@/assets/img/mail.svg';
import user from '@/assets/img/user.svg';
import { login, register, type FormState } from '@/lib/actions';

const fields = {
  username: { icon: user, type: 'text', placeholder: 'Username', autoComplete: 'username' },
  email: { icon: mail, type: 'email', placeholder: 'E-mail', autoComplete: 'email' },
  password: { icon: lock, type: 'password', placeholder: 'Password', autoComplete: 'current-password' },
} as const;

export function AuthForm({ mode }: { mode: 'login' | 'register' }) {
  const isLogin = mode === 'login';
  const [state, action, pending] = useActionState<FormState, FormData>(isLogin ? login : register, {});
  const names = isLogin ? (['username', 'password'] as const) : (['username', 'email', 'password'] as const);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand text-white">
      <Link href="/" className="m-10 text-3xl font-bold tracking-wide">
        hitorigoto
      </Link>
      <h1 className="text-lg font-bold">{isLogin ? 'Login to your account.' : 'Create a new account.'}</h1>

      <form action={action} className="flex flex-col gap-4 py-6 text-dark">
        {names.map((name) => {
          const f = fields[name];
          return (
            <div key={name}>
              <div className="relative">
                <Image className="absolute top-3.5 left-3.5" src={f.icon} alt="" />
                <input
                  className="w-[350px] rounded-md border-2 border-black bg-white py-3 pl-12 focus:outline-none"
                  name={name}
                  type={f.type}
                  placeholder={f.placeholder}
                  autoComplete={!isLogin && name === 'password' ? 'new-password' : f.autoComplete}
                  required
                />
              </div>
              {state.fieldErrors?.[name]?.map((msg) => (
                <p key={msg} className="mt-1 max-w-[350px] text-sm text-red-200">
                  {msg}
                </p>
              ))}
            </div>
          );
        })}
        {state.error && <p className="max-w-[350px] text-sm text-red-200">{state.error}</p>}
        <button
          disabled={pending}
          className="w-[350px] rounded-md bg-black px-5 py-3 font-bold text-white disabled:opacity-60"
        >
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="text-sm">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link href={isLogin ? '/register' : '/login'} className="font-bold">
          {isLogin ? 'Sign up' : 'Login'}
        </Link>
      </p>
    </main>
  );
}
