// controllers/userController.js
const userModel = require('../models/userModel');

const getUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
};

const getUser = (req, res) => {
  const user = userModel.getUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

const addUser = (req, res) => {
  const newUser = {
    id: Date.now().toString(),
    name: req.body.name
  };
  userModel.createUser(newUser);
  res.status(201).json(newUser);
};

module.exports = {
  getUsers,
  getUser,
  addUser
};
