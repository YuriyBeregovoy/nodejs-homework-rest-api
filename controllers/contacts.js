const Contact = require("../models/contact")

// const Joi = require('joi');
// const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');


// const {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// } = require("../models/contacts");

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().pattern(/^\(\d{3}\) \d{3}-\d{4}$/).required(),
// });

const getAll = async (req, res) => {
  
  const result = await Contact.find();
   console.log(result);
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const contact = await getContactById(contactId);
//   if (!contact) {
//     return res.status(404).json({ message: "Not found" })
//   }
//   res.json(contact);
// };

// const add = async (req, res) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw HttpError(400, error.message);
//   }
//   const result = await addContact(req.body);
//   res.status(201).json(result);
// };

// const updateById = async (req, res) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw new HttpError(400, error.message);
//   }
//   const { contactId } = req.params;
//   const result = await updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const deleteById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({ message: "Delete success" });
   
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  // getById: ctrlWrapper(getById),
  // add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById)
};