import 'server-only';
import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

// Reuse one connection across hot reloads and warm serverless invocations.
const globalCache = globalThis as typeof globalThis & {
  mongoose?: { conn?: typeof mongoose; promise?: Promise<typeof mongoose> };
};
const cache = (globalCache.mongoose ??= {});

export async function connectDB() {
  if (!uri) throw new Error('MONGODB_URI is not set');
  if (cache.conn) return cache.conn;
  cache.promise ??= mongoose.connect(uri, { bufferCommands: false });
  try {
    cache.conn = await cache.promise;
  } catch (err) {
    cache.promise = undefined;
    throw err;
  }
  return cache.conn;
}
