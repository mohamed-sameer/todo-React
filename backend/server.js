const express = require('express');
const mongoose = require('mongoose');
const db = require('./DB/db');
const router = require('./router/todo.route');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log('listening on port', port);
});
