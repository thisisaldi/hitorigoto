require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI

const dbConnect = mongoose.connect(
  uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));

module.exports = dbConnect;