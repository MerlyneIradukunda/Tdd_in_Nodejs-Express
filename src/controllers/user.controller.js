const mongoose = require("mongoose");
const { User } = require("../models/user.model");

module.exports.getAllUsers = async (req, res) => {
  let users = await User.find({});
  return res.send(users);
};

module.exports.getUser = async (req, res) => {
  let userId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(userId))
    return res.status(400).send("Invalid object id");
  let user = await User.findById(userId);
  if (!user) return res.status(404).send("User not found");
  return res.send(user);
};
