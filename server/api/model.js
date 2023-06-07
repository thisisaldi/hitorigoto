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
  },
});

module.exports = mongoose.model("User", userSchema)