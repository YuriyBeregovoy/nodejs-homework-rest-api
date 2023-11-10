const Joi = require('joi');
const HttpError = require('http-errors');

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts")

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\(\d{3}\) \d{3}-\d{4}$/).required(),
});

const getAll = async (req, res, next) => {
  try {
    const contacts = await listContacts();

    res.json(contacts);
  } catch (error) {
    next(error);
  }
}

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    if (!contact) {
      return res.status(404).json({ message: "Not found" })
    }
    res.json(contact);
  }
  catch (error) {
    next(error);
  }
}
const add = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await addContact(req.body);
    res.status(201).json(result);
  }
  catch (error) {
    next(error);
  }
}

const updateById =  async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw new HttpError(400, error.message);
    }
    const {contactId} = req.params;
    const result = await updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  }
  catch (error) {
    next(error);
  }
}
const deleteById = async (req, res, next) => {
   try {
      const {contactId} = req.params;
    const result = await removeContact(contactId);
    if (!result) {
     throw HttpError(404, "Not found");
    }
   res.json({ message: "Delete success" });
  }
  catch (error) {
    next(error);
  }
   
}

module.exports = {
  getAll,
  getById, 
  add,
  updateById,
  deleteById

}