'use client';

import { useActionState, useEffect, useState } from 'react';
import { deleteAccount, updateProfile, type FormState } from '@/lib/actions';
import type { CurrentUser } from '@/lib/auth';
import { Avatar } from './avatar';
import { Button } from './button';

const input = 'h-11 w-full rounded-xl border border-black/20 bg-white px-3 transition focus:border-brand';

function Row({ label, name, errors, children }: {
  label: string;
  name: string;
  errors?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:gap-4">
      <label htmlFor={name} className="w-[130px] shrink-0 text-sm font-medium md:mt-3">
        {label}
      </label>
      <div className="w-full">
        {children}
        {errors?.map((e) => (
          <p key={e} className="mt-1 text-sm text-red-600">
            {e}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ProfileForm({ user }: { user: CurrentUser }) {
  const [state, action, pending] = useActionState<FormState, FormData>(updateProfile, {});
  const [preview, setPreview] = useState<string>();
  const err = (name: string) => state.fieldErrors?.[name];
  const val = (name: keyof CurrentUser) => state.values?.[name] ?? String(user[name] ?? '');

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  return (
    <>
      <form action={action} className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:gap-10">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="" className="h-[200px] w-[200px] rounded-2xl border border-black/10 object-cover" />
          ) : (
            <Avatar avatarId={user.avatarId} size={200} className="rounded-2xl border border-black/10" />
          )}
          <div className="sm:mt-14">
            <label htmlFor="profileimg" className="inline-block cursor-pointer rounded-xl border-2 border-brand px-4 py-2 font-medium text-brand transition hover:bg-brand hover:text-white">
              Pilih foto
            </label>
            <input
              id="profileimg"
              name="profileimg"
              type="file"
              accept="image/png,image/jpeg"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setPreview(file ? URL.createObjectURL(file) : undefined);
              }}
            />
            <p className="mt-2 ml-1 text-xs">Gunakan foto persegi (rasio 1:1)</p>
            <p className="ml-1 text-xs">Maksimal 2 MB, format PNG atau JPEG</p>
            {err('profileimg')?.map((e) => (
              <p key={e} className="mt-1 text-sm text-red-600">{e}</p>
            ))}
          </div>
        </div>

        <Row label="Nama lengkap" name="fullName" errors={err('fullName')}>
          <input id="fullName" name="fullName" defaultValue={val('fullName')} className={input} />
        </Row>
        <Row label="Gender" name="gender" errors={err('gender')}>
          <select id="gender" name="gender" defaultValue={val('gender')} className={input}>
            <option value="">-</option>
            <option value="cowo">Laki - Laki</option>
            <option value="cewe">Perempuan</option>
          </select>
        </Row>
        <Row label="Tanggal Lahir" name="birthDate" errors={err('birthDate')}>
          <input id="birthDate" name="birthDate" type="date" defaultValue={val('birthDate')} className={input} />
        </Row>
        <Row label="Pekerjaan" name="job" errors={err('job')}>
          <input id="job" name="job" defaultValue={val('job')} className={input} />
        </Row>
        <Row label="Instansi" name="organization" errors={err('organization')}>
          <input id="organization" name="organization" defaultValue={val('organization')} className={input} />
        </Row>
        <Row label="No. Telp" name="phoneNumber" errors={err('phoneNumber')}>
          <input id="phoneNumber" name="phoneNumber" type="tel" defaultValue={val('phoneNumber')} className={input} />
        </Row>
        <Row label="Email" name="email" errors={err('email')}>
          <input id="email" name="email" type="email" required defaultValue={val('email')} className={input} />
        </Row>
        <Row label="Tentang saya" name="about" errors={err('about')}>
          <textarea id="about" name="about" maxLength={250} defaultValue={val('about')} className={`${input} h-[100px] resize-none py-1`} />
        </Row>

        <div>
          <Button disabled={pending}>{pending ? 'Menyimpan…' : 'Simpan perubahan'}</Button>
        </div>
      </form>

      <form
        action={deleteAccount}
        className="mt-6 border-t border-black/10 pt-6"
        onSubmit={(e) => {
          if (!confirm('Hapus akun secara permanen? Tindakan ini tidak bisa dibatalkan.')) e.preventDefault();
        }}
      >
        <Button variant="danger">Hapus akun</Button>
      </form>
    </>
  );
}
