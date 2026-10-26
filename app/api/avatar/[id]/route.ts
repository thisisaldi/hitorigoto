import { readAvatar } from '@/lib/avatar';

// Avatars are keyed by GridFS id and never mutate (a new upload gets a new id),
// so they can be cached by the browser and the CDN indefinitely.
export async function GET(_req: Request, ctx: RouteContext<'/api/avatar/[id]'>) {
  const { id } = await ctx.params;
  const avatar = await readAvatar(id);
  if (!avatar) return new Response('Not found', { status: 404 });

  return new Response(new Uint8Array(avatar.data), {
    headers: {
      'Content-Type': avatar.contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
