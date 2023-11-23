const { User, registerSchema, loginSchema  } = require("../models/user");
const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;


const register = async (req, res) => {
    const { error } = registerSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "Bad Request");
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already sn use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({...req.body, password: hashPassword});

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
 }});
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "Bad Request");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  res.status(200).json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    }
  });
};



module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),

}