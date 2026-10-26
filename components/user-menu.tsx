import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';
import { logout } from '@/lib/actions';
import { Avatar } from './avatar';
import { ButtonLink } from './button';

const item = 'block w-full rounded-md px-3 py-2 text-left transition hover:bg-cream hover:text-brand';

export async function UserMenu() {
  const user = await getCurrentUser();
  if (!user) return <GuestButtons />;

  return (
    <div className="dropdown py-3">
      <button
        type="button"
        className="flex items-center gap-3 rounded-xl border border-brand/30 p-1.5 pr-3 transition hover:border-brand"
      >
        <Avatar avatarId={user.avatarId} size={32} className="rounded-lg" />
        <span className="hidden max-w-32 truncate text-sm font-medium sm:inline">{user.username}</span>
      </button>
      <div className="dropdown-content right-0 w-44 rounded-xl border border-black/10 p-2 shadow-soft">
        <Link href="/profile" className={item}>
          Profil saya
        </Link>
        <Link href="/editprofile" className={item}>
          Ubah profil
        </Link>
        <form action={logout}>
          <button className={item}>Keluar</button>
        </form>
      </div>
    </div>
  );
}

export function GuestButtons() {
  return (
    <div className="flex items-center gap-3">
      <ButtonLink href="/login" variant="outline" className="py-2">
        Masuk
      </ButtonLink>
      <ButtonLink href="/register" className="py-2 max-sm:hidden">
        Daftar
      </ButtonLink>
    </div>
  );
}
