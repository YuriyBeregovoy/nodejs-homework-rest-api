const { Schema, model } = require("mongoose");
const hahdleMongooseError = require("../helpers/handleMongooseError");
const Joi = require("joi");

const userSchema = new Schema(
{
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: String
}

)
