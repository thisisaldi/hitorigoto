import Link from 'next/link';
import { getCurrentUser } from '@/lib/auth';
import { logout } from '@/lib/actions';
import { Avatar } from './avatar';
import { ButtonLink } from './button';

export async function UserMenu() {
  const user = await getCurrentUser();
  if (!user) return <GuestButtons />;

  return (
    <div className="dropdown py-3">
      <div className="flex items-center gap-5 rounded-lg border-2 border-indigo-500/50 p-2">
        <Avatar avatarId={user.avatarId} size={30} className="rounded-full" />
        <span>{user.username}</span>
      </div>
      <div className="dropdown-content w-36 rounded-md border-2 border-black px-4 py-2">
        <Link href="/profile" className="py-2 hover:text-brand">
          My Profile
        </Link>
        <Link href="/editprofile" className="py-2 hover:text-brand">
          Edit Profile
        </Link>
        <form action={logout}>
          <button className="w-full py-2 text-left hover:text-brand">Log Out</button>
        </form>
      </div>
    </div>
  );
}

export function GuestButtons() {
  return (
    <div className="flex gap-5">
      <ButtonLink href="/login" variant="outline">
        Login
      </ButtonLink>
      <ButtonLink href="/register">Signup</ButtonLink>
    </div>
  );
}
