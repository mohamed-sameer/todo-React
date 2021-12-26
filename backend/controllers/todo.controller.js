const Todo = require('../models/todo.model');

module.exports = {
  index: (req, res) => {
    Todo.find({}, (err, tasks) => {
      if (err) res.json(err);
      else res.status(201).json(tasks);
    });
  },
  create: (req, res) => {
    const newTask = new Todo({
      title: req.body.title,
      isCompleted: req.body.isCompleted,
    });
    newTask.save((err) => {
      if (err) res.json(err);
      else res.status(201).json('tasks created');
    });
  },
  delete: (req, res) => {
    const taskId = req.params.id;
    Todo.deleteOne({ _id: taskId }, (err) => {
      if (err) res.json(err);
      else res.status(201).json('task deleted');
    });
  },
  update: (req, res) => {
    const taskId = req.params.id;
    const updateTask = {
      title: req.body.title,
      isCompleted: req.body.isCompleted,
    };
    Todo.findByIdAndUpdate(taskId, updateTask, (err) => {
      if (err) res.json(err);
      else res.status(201).json('task updated');
    });
  },
};
