const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/todo-react';
mongoose.connect(URI);

const db = mongoose.connection;

//check if DB is connected

db.on('error', (err) => console.log('err'));
db.on('connected', (err) => console.log('DB connected'));
