import type { ComponentProps } from 'react';

/** Max-width page container shared by every section. */
export function Container({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`} {...props} />;
}
