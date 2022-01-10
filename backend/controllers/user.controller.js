const User = require('../models/user.model');

module.exports = {
  registerUser: (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    newUser.save(newUser, (err, user) => {
      if (err) return res.status(404).json({ message: err.message });
      else res.status(202).json('user created successfully');
    });
  },
  loginUser: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) res.status(406).json({ message: err.message });
      else {
        if (!user) res.status(401).json({ message: 'email is not correct' });
        else {
          if (user.password === req.body.password)
            res.status(200).json('logged in');
          else res.status(401).json({ message: 'password is incorrect' });
        }
      }
    });
  },
};
