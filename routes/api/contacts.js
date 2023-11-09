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
   if (!req.body.name || !req.body.email || !req.body.phone) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
})

router.delete('/:contactId', async (req, res, next) => {
   const deletedContact = await removeContact(req.params.contactId.toLowerCase());
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

  const updatedContact = await updateContact(req.params.contactId.toLowerCase(), req.body);
  if (updatedContact) {
    res.json(updatedContact);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
})

module.exports = router
