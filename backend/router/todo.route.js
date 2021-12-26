const router = require('express').Router();
const todoController = require('../controllers/todo.controller');

router
  .get('/tasks', todoController.index)
  .post('/tasks', todoController.create)
  .get('/filter', todoController.filter);

router
  .put('/tasks/:id', todoController.update)
  .put('/tasks/:id/:isCompleted', todoController.changeTaskStatus);

router
  .delete('/tasks', todoController.deleteCompleted)
  .delete('/tasks/:id', todoController.delete);

module.exports = router;
