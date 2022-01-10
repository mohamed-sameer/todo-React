const router = require('express').Router();
const todoController = require('../controllers/todo.controller');

router
  .get('/', todoController.index)
  .post('/', todoController.create)
  .get('/filter', todoController.filter);

router
  .put('/:id', todoController.update)
  .put('/:id/:isCompleted', todoController.changeTaskStatus);

router
  .delete('/', todoController.deleteCompleted)
  .delete('/:id', todoController.delete);

module.exports = router;
