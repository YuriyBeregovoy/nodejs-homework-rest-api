const { User } = require("../models/user");
const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const bcrypt = require("bcrypt");

const register = async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already sn use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({...req.body, password: hashPassword});

 res.status(201).json(newUser);

};

module.exports = {
  register: ctrlWrapper(register),

}