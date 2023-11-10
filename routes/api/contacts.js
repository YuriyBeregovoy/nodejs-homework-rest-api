const express = require('express')
const Joi = require('joi');
const HttpError = require('http-errors');

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts")

const router = express.Router()

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\(\d{3}\) \d{3}-\d{4}$/).required(),
});

router.get('/', async (req, res, next) => {
  try {
    const contacts = await listContacts();

    res.json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get('/:contactId', async (req, res, next) => {
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
})

router.post('/', async (req, res, next) => {
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
})

router.delete('/:contactId', async (req, res, next) => {
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
   
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
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
})

module.exports = router
