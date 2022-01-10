const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/todo-react';
const options = {
  useNewUrlParser: true,
  family: 4, // Use IPv4, skip trying IPv6
};
mongoose.connect(URI, options);

const db = mongoose.connection;

//check if DB is connected

db.on('error', (err) => console.log('err'));
db.on('connected', (err) => console.log('DB connected'));
