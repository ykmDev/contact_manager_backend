const express = require("express");
const router = express.Router();

const { getContacts, createContact, detailContact, updateContact, deleteContact } = require("../controllers/contactController.js");

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(detailContact).put(updateContact).delete(deleteContact);

module.exports = router;