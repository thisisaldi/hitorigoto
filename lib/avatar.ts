import 'server-only';
import mongoose from 'mongoose';
import { Readable } from 'node:stream';
import { connectDB } from './db';

export const AVATAR_TYPES = ['image/png', 'image/jpeg'];
export const AVATAR_MAX_BYTES = 2 * 1024 * 1024;

// Default GridFS bucket ("fs"), so avatars uploaded by the old Express API keep working.
async function bucket() {
  const { connection, mongo } = await connectDB();
  return new mongo.GridFSBucket(connection.db!);
}

export async function saveAvatar(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const gridfs = await bucket();
  const upload = gridfs.openUploadStream(`${Date.now()}-${file.name}`, {
    metadata: { contentType: file.type },
  });
  await new Promise<void>((resolve, reject) => {
    Readable.from(buffer).pipe(upload).on('finish', resolve).on('error', reject);
  });
  return { id: upload.id.toString(), filename: upload.filename };
}

export async function deleteAvatar(id: string) {
  try {
    await (await bucket()).delete(new mongoose.Types.ObjectId(id));
  } catch {
    // already gone or invalid id: nothing to clean up
  }
}

// Files written by the old Express API stored contentType at the top level.
const legacyContentType = (info: object) => (info as { contentType?: string }).contentType;

/** Reads an avatar fully into memory; avatars are capped at 2 MB. */
export async function readAvatar(id: string) {
  if (!mongoose.isValidObjectId(id)) return null;
  const gridfs = await bucket();
  const _id = new mongoose.Types.ObjectId(id);
  const [info] = await gridfs.find({ _id }).limit(1).toArray();
  if (!info) return null;

  const chunks: Buffer[] = [];
  for await (const chunk of gridfs.openDownloadStream(_id)) chunks.push(chunk as Buffer);
  return { data: Buffer.concat(chunks), contentType: legacyContentType(info) ?? info.metadata?.contentType ?? 'image/jpeg' };
}
