import Image from 'next/image';
import fallback from '@/assets/img/mhmdjason.jpg';

export function Avatar({
  avatarId,
  size,
  className = '',
}: {
  avatarId: string | null;
  size: number;
  className?: string;
}) {
  return (
    <Image
      className={`object-cover ${className}`}
      src={avatarId ? `/api/avatar/${avatarId}` : fallback}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size }}
      unoptimized={!!avatarId}
    />
  );
}
