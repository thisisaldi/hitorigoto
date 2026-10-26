import Image from 'next/image';

/** Uploaded photo when there is one, otherwise a generic person silhouette. */
export function Avatar({
  avatarId,
  size,
  className = '',
}: {
  avatarId: string | null;
  size: number;
  className?: string;
}) {
  if (!avatarId) {
    return (
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className={`shrink-0 ${className}`}
        aria-hidden
      >
        <rect width="64" height="64" fill="#e4e0f7" />
        <circle cx="32" cy="25" r="11" fill="#a59cff" />
        <path d="M10 64c0-13 10-22 22-22s22 9 22 22z" fill="#a59cff" />
      </svg>
    );
  }

  return (
    <Image
      className={`object-cover ${className}`}
      src={`/api/avatar/${avatarId}`}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size }}
      unoptimized
    />
  );
}
