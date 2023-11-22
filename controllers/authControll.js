const { User } = require("../models/user");
// const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');


const register = async (req, res) => {
  const newUser = await User.create(req.body);

  res.json(newUser);

};

module.exports = {
  register: ctrlWrapper(register),

}