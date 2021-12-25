const router = require('express').Router();
const todoController = require('../controllers/todo.controller');

router.get('/todo', todoController.index);

module.exports = router;
