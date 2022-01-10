const router = require('express').Router();
const todoRoutes = require('./todo.route');
const userRoutes = require('./user.route');
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
router.use('/tasks', todoRoutes);
router.use('/users', userRoutes);

module.exports = router;
