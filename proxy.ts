import { jwtVerify } from 'jose';
import { NextResponse, type NextRequest } from 'next/server';

const PROTECTED = ['/profile', '/editprofile'];

async function isLoggedIn(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const secret = process.env.SESSION_SECRET;
  if (!token || !secret) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

// Cheap gate only: pages still load the user via requireUser().
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const loggedIn = await isLoggedIn(request);

  if (PROTECTED.includes(pathname) && !loggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  // already signed in: skip the auth forms
  if (!PROTECTED.includes(pathname) && loggedIn) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = { matcher: ['/profile', '/editprofile', '/login', '/register'] };
