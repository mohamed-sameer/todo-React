const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./DB/db');
const router = require('./router/index.route');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log('listening on port', port);
});
