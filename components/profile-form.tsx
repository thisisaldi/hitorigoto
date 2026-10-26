'use client';

import { useActionState, useEffect, useState } from 'react';
import { deleteAccount, updateProfile, type FormState } from '@/lib/actions';
import type { CurrentUser } from '@/lib/auth';
import { Avatar } from './avatar';
import { Button } from './button';

const input = 'h-10 w-[700px] max-w-full rounded border-2 border-black px-2';

function Row({ label, name, errors, children }: {
  label: string;
  name: string;
  errors?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <label htmlFor={name} className="mt-2 w-[120px] shrink-0">
        {label}
      </label>
      <div>
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

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  return (
    <>
      <form action={action} className="flex flex-col gap-8">
        <div className="flex items-start gap-10">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="" className="h-[200px] w-[200px] rounded border-2 border-black object-cover" />
          ) : (
            <Avatar avatarId={user.avatarId} size={200} className="rounded border-2 border-black" />
          )}
          <div className="mt-14">
            <label htmlFor="profileimg" className="cursor-pointer rounded-lg bg-brand px-4 py-1.5 text-white hover:bg-brand-light">
              Select Image
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
            <p className="mt-2 ml-1 text-xs">Gambar Profile Anda harus memiliki rasio 1:1</p>
            <p className="ml-1 text-xs">Maksimum ukuran gambar adalah 2MB (PNG atau JPEG)</p>
            {err('profileimg')?.map((e) => (
              <p key={e} className="mt-1 text-sm text-red-600">{e}</p>
            ))}
          </div>
        </div>

        <Row label="Nama" name="fullName" errors={err('fullName')}>
          <input id="fullName" name="fullName" defaultValue={user.fullName} className={input} />
        </Row>
        <Row label="Gender" name="gender" errors={err('gender')}>
          <select id="gender" name="gender" defaultValue={user.gender} className={input}>
            <option value="">-</option>
            <option value="cowo">Laki - Laki</option>
            <option value="cewe">Perempuan</option>
          </select>
        </Row>
        <Row label="Tanggal Lahir" name="birthDate" errors={err('birthDate')}>
          <input id="birthDate" name="birthDate" type="date" defaultValue={user.birthDate} className={input} />
        </Row>
        <Row label="Pekerjaan" name="job" errors={err('job')}>
          <input id="job" name="job" defaultValue={user.job} className={input} />
        </Row>
        <Row label="Instansi" name="organization" errors={err('organization')}>
          <input id="organization" name="organization" defaultValue={user.organization} className={input} />
        </Row>
        <Row label="No. Telp" name="phoneNumber" errors={err('phoneNumber')}>
          <input id="phoneNumber" name="phoneNumber" type="tel" defaultValue={user.phoneNumber} className={input} />
        </Row>
        <Row label="Email" name="email" errors={err('email')}>
          <input id="email" name="email" type="email" required defaultValue={user.email} className={input} />
        </Row>
        <Row label="About Me" name="about" errors={err('about')}>
          <textarea id="about" name="about" maxLength={250} defaultValue={user.about} className={`${input} h-[100px] resize-none py-1`} />
        </Row>

        <div>
          <Button disabled={pending}>{pending ? 'Saving…' : 'Save Changes'}</Button>
        </div>
      </form>

      <form
        action={deleteAccount}
        className="mt-4"
        onSubmit={(e) => {
          if (!confirm('Delete your account permanently?')) e.preventDefault();
        }}
      >
        <Button variant="danger">Delete Account</Button>
      </form>
    </>
  );
}
