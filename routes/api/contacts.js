const express = require('express');
const isValidId = require("../../middlewares/isValidId")
const {
  getAll,
  getById,
  add,
  updateById,
  deleteById
} = require("../../controllers/contacts");

const router = express.Router();


router.get('/', getAll);

router.get('/:contactId', isValidId, getById);

router.post('/', add);

router.put('/:contactId', isValidId, updateById);

router.patch('/:contactId/favorite', isValidId, updateById);

router.delete('/:contactId', isValidId, deleteById);

module.exports = router;
