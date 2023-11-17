const Contact = require("../models/contact")


const HttpError = require('http-errors');
const ctrlWrapper = require('../helpers/ctrlWrapper');




const getAll = async (req, res) => {
    const result = await Contact.find();
   console.log(result);
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    return res.status(404).json({ message: "Not found" })
  }
  res.json(contact);
};

const add = async (req, res) => {
   const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
   const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};


const updateStatusContact = async (req, res) => {
   const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "missing field favorite");
  }
  res.json(result);
};



const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
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