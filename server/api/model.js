const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username: String,
  password: String,
  createdAt: {
    type: Date,
    default: new Date(),
  }
}, {
  collection: "users",
  versionKey: false,
});

const imgSchema = new mongoose.Schema({
    _id: ObjectId,
    files_id: ObjectId,
    n: Number,
    data: Buffer,
});

const imgDataSchema = new mongoose.Schema({
  _id: ObjectId,
  length: Number,
  chunkSize: Number,
  uploadDate: Date,
  filename: String,
  contentType : String
});

const User = mongoose.model("User", userSchema);
const Image = mongoose.model("Image", imgSchema, "fs.chunks");
const ImageData = mongoose.model("ImageData", imgDataSchema, "fs.files");

module.exports = {
  User,
  Image,
  ImageData
}