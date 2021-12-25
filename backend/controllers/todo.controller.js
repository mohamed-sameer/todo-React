const Todo = require('../models/todo.model');

module.exports = {
  index: (req, res) => {
    Todo.find({}, (err, todos) => {
      if (err) res.send(err);
      else res.send(todos);
    });
  },
};
