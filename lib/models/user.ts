import 'server-only';
import mongoose, { type InferSchemaType } from 'mongoose';

// Matches the existing `users` collection, including the fields the old API wrote with strict:false.
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    bio: {
      full_name: String,
      gender: String,
      birth_date: Date,
      job: String,
      organization: String,
      phone_number: String,
      about: String,
    },
    profile_img: { id: mongoose.Schema.Types.Mixed, filename: String },
  },
  { collection: 'users', versionKey: false },
);

export type UserDoc = InferSchemaType<typeof userSchema>;

export const User: mongoose.Model<UserDoc> =
  mongoose.models.User ?? mongoose.model<UserDoc>('User', userSchema);
