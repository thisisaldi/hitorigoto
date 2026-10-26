import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'solid' | 'outline' | 'danger' | 'light';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-medium transition duration-200 select-none active:scale-[0.98] disabled:opacity-60';
const variants: Record<Variant, string> = {
  solid: 'bg-brand text-white shadow-soft hover:bg-brand-dark hover:shadow-lift',
  outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  light: 'border-2 border-white/70 text-white hover:bg-white hover:text-brand-ink',
  danger: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
};

type Props = { variant?: Variant; className?: string };

export function Button({
  variant = 'solid',
  className = '',
  ...props
}: Props & ComponentProps<'button'>) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

export function ButtonLink({
  variant = 'solid',
  className = '',
  ...props
}: Props & ComponentProps<typeof Link>) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
