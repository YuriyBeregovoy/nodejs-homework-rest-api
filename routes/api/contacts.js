const express = require('express')

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts")

const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await listContacts();
  res.json(result)
})

router.get('/:contactId', async (req, res, next) => {
   const contact = await  getContactById(Number(req.params.contactId));
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
})

router.post('/', async (req, res, next) => {
   if (!req.body.name || !req.body.email || !req.body.phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
})

router.delete('/:contactId', async (req, res, next) => {
   const deletedContact = await removeContact(Number(req.params.contactId));
  if (deletedContact) {
    res.json({ message: 'Contact deleted' });
  } else {
    res.status(404).json({ message: 'Not found' });
  }
})

router.put('/:contactId', async (req, res, next) => {
   if (!req.body) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const updatedContact = await updateContact(Number(req.params.contactId), req.body);
  if (updatedContact) {
    res.json(updatedContact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
})

module.exports = router
