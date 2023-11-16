const { Schema, model } = require("mongoose")
 
const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  });

const Contact = model("contact", contactSchema);

module.exports = Contact;







 












// const fs = require('fs/promises')
// const path = require('path');
// const { v4: uuidv4 } = require('uuid');
// const newId = uuidv4();

// const contactsPath = path.resolve("./models/contacts.json");

// const listContacts = async () => { 
//   try {
//     const data = await fs.readFile(contactsPath, 'utf-8');
//     return JSON.parse(data);
//   } catch (error) {
//     return [];
//   }}

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   return contacts.find(contact => contact.id === contactId) || null;
// }

// const removeContact = async (contactId) => {
//  const contacts = await listContacts();
//   const index = contacts.findIndex(contact => contact.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   const removedContact = contacts.splice(index, 1)[0];
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return removedContact;
// }

// const addContact = async (body) => {
//    const contacts = await listContacts();
//   const newContact = {id: newId, ...body };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact;
// }

// const updateContact = async (contactId, body) => { const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === contactId);
//   if (index === -1) return null;
//   contacts[index] = { ...contacts[index], ...body };
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts[index];
// }

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }
