const { User, registerSchema } = require("../models/user");
const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');


const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const newUser = await User.create(req.body);

  res.json(newUser);

};

module.exports = {
  register: ctrlWrapper(register),

}