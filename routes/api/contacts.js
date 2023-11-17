const express = require('express');
const isValidId = require("../../middlewares/isValidId")
const { updateStatusContact } = require("../../controllers/contacts");
const  addSchema  = require("../../models/contact")

const {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
} = require("../../controllers/contacts");

const router = express.Router();


router.get('/', getAll);

router.get('/:contactId', isValidId, getById);

router.post('/', add);

router.put('/:contactId', isValidId, addSchema, updateById);

router.patch('/:contactId/favorite', isValidId, addSchema,  updateStatusContact);

router.delete('/:contactId', isValidId, addSchema, deleteById);

module.exports = router;
