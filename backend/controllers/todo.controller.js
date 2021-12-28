const Todo = require('../models/todo.model');

module.exports = {
  index: (req, res) => {
    Todo.find({}, (err, tasks) => {
      if (err) res.json(err);
      else res.status(201).json(tasks);
    });
  },
  filter: (req, res) => {
    const query = req.query.isCompleted;
    Todo.find({ isCompleted: query }, (err, tasks) => {
      if (err) res.json(err);
      else res.status(200).json(tasks);
    });
  },
  create: (req, res) => {
    const newTask = new Todo({
      title: req.body.title,
      isCompleted: req.body.isCompleted,
    });
    newTask.save((err) => {
      if (err) res.json(err);
      else res.status(201).json(newTask);
    });
  },
  delete: (req, res) => {
    const taskId = req.params.id;
    Todo.deleteOne({ _id: taskId }, (err, task) => {
      if (err) res.json(err);
      else
        task.deletedCount === 1
          ? res.status(201).json('task deleted')
          : res.status(404).json('task not found');
    });
  },
  update: (req, res) => {
    const taskId = req.params.id;
    const updateTask = {
      title: req.body.title,
      isCompleted: req.body.isCompleted,
    };

    Todo.findOneAndUpdate({ _id: taskId }, updateTask, (err, task) => {
      if (err) res.status(404).json(err);
      else {
        !task
          ? res.status(404).json('task not found')
          : res.status(201).json('task updated');
      }
    });
  },
  deleteCompleted: (req, res) => {
    Todo.deleteMany({ isCompleted: true }, (err, tasks) => {
      if (err) res.json(err);
      else {
        tasks.deletedCount === 0
          ? res.status(404).json('thre are no completed tasks')
          : res.status(200).json('completed tasks deleted');
      }
    });
  },
  changeTaskStatus: (req, res) => {
    const taskId = req.params.id;
    Todo.findOneAndUpdate(
      { _id: taskId },
      { isCompleted: req.params.isCompleted },
      (err, task) => {
        if (err) res.status(404).json(err);
        else {
          !task
            ? res.status(404).json('task not found')
            : res.status(201).json('task updated');
        }
      }
    );
  },
};
