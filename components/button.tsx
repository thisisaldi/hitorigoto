import Link from 'next/link';
import type { ComponentProps } from 'react';

type Variant = 'solid' | 'outline' | 'danger';

const base = 'rounded-lg px-4 py-1.5 transition ease-in-out hover:text-white select-none';
const variants: Record<Variant, string> = {
  solid: 'bg-brand text-white hover:bg-brand-light',
  outline: 'border-2 border-brand text-brand hover:bg-brand',
  danger: 'border-2 border-red-600 text-red-600 hover:bg-red-600',
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
  return <Link className={`${base} inline-block ${variants[variant]} ${className}`} {...props} />;
}
