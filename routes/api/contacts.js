const express = require('express');
const isValidId = require("../../middlewares/isValidId")
const { updateStatusContact } = require("../../controllers/contacts");
const {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
} = require("../../controllers/contacts");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();


router.get('/', authenticate, getAll);

router.get('/:contactId', authenticate, isValidId, getById);

router.post('/', authenticate, add);

router.put('/:contactId', authenticate, isValidId, updateById);

router.patch('/:contactId/favorite', authenticate, isValidId, updateStatusContact);

router.delete('/:contactId', authenticate, isValidId, deleteById);

module.exports = router;
