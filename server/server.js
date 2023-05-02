require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { env, port } = require("./api/configs/server.config");

const router = require("./api/router");

const app = express();
app.use(express.static(path.join(__dirname + '../../build')))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", router);
app.use(cors());

app.listen(port, (err) => {
  if(err) {
    console.log("Server failed to start ", err);
  }

  console.log(`Server started on [env, port] = [${env}, ${port}]`);
});