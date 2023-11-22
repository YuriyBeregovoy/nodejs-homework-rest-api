const { User } = require("../models/user");
const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');


const register = async (req, res) => {

  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already sn use");
  }
  const newUser = await User.create(req.body);

 res.status(201).json(newUser);

};

module.exports = {
  register: ctrlWrapper(register),

}