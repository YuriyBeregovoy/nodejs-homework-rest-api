const {Contact, updateFavoriteSchema, addSchema} = require("../models/contact")

const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
    const result = await Contact.find({owner});
   console.log(result);
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    return res.status(404).json({ message: "Not found" })
  }
  if (String(contact.owner) !== String(req.user._id)) {
      return res.status(404).json({ message: "Contact not found" });
    }
  res.json(contact);
};

const add = async (req, res) => {
  const { _id: owner } = req.user;

    const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
   const result = await Contact.create({...req.body, owner});
  res.status(201).json(result);
};

const updateById = async (req, res) => {
   const { error } = addSchema.validate(req.body);
  if (error) {
    throw new HttpError(400, error.message);
  }
   const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};


const updateStatusContact = async (req, res, next) => {
  
  const { contactId } = req.params;
  const { error } = updateFavoriteSchema.validate(req.body);

  if (error) {
    return next(HttpError(400, "missing field favorite"));
  }

  try {
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};


const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Delete success" });
   
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
  updateStatusContact: ctrlWrapper(updateStatusContact)
};