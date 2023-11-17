const { Schema, model } = require("mongoose");
const hahdleMongooseError = require("../helpers/handleMongooseError");
const Joi = require("joi");
 
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  });

contactSchema.post("save", hahdleMongooseError);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const Contact = model("contact", contactSchema);

module.exports = {Contact, updateFavoriteSchema};







 







