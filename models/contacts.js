// const fs = require('fs/promises')
import path from "path";
import { promises  } from 'fs';

const contactsPath = path.resolve("./models/contacts.json");

const listContacts = async () => { try {
    const data = await promises.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }}

const getContactById = async (contactId) => {}

const removeContact = async (contactId) => {}

const addContact = async (body) => {}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
