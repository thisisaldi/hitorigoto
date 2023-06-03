require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const { env, port } = require("./api/configs/server.config");
// const dbConnect = require('./api/configs/db.config');
const { notFound, errorHandler } = require('./api/middleware/error');
const router = require("./api/router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/users", router);
app.get('/', (req, res) => {
  res.send('API is running....');
});
app.use(notFound);
app.use(errorHandler);

app.listen(port,() => console.log(`Server started on [env, port] = [${env}, ${port}]`));