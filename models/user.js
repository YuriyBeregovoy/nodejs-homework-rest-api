const { Schema, model } = require("mongoose");
const hahdleMongooseError = require("../helpers/handleMongooseError");
const Joi = require("joi");



const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    token: String
  }

);

userSchema.post("save", hahdleMongooseError);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required,
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required,
  password: Joi.string().min(6).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
};


const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
}