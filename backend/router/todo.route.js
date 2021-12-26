const router = require('express').Router();
const todoController = require('../controllers/todo.controller');

router
  .get('/tasks', todoController.index)
  .post('/tasks', todoController.create);
router
  .put('/tasks/:id', todoController.update)
  .delete('/tasks/:id', todoController.delete);

module.exports = router;
