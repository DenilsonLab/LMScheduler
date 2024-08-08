// models/userModel.js
let users = [];

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find(user => user.id === id);
};

const createUser = (user) => {
  users.push(user);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};
