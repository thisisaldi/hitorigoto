import { NextResponse, type NextRequest } from 'next/server';

// Cheap gate only: pages still verify the session via requireUser().
export function proxy(request: NextRequest) {
  if (!request.cookies.has('token')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = { matcher: ['/profile', '/editprofile'] };
