const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  isCompleted: { type: Boolean, required: true },
});

module.exports = mongoose.model('Todo', todoSchema);
