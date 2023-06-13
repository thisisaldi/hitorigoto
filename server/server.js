require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { env, port } = require("./api/configs/server.config");
const router = require("./api/router");
const dbConnect = require('./api/configs/db.config');

const app = express();

dbConnect;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/", router);

app.listen(port,() => console.log(`Server started on [env, port] = [${env}, ${port}]`));