const express = require("express");
const router = express.Router();

const { getContacts, createContact, detailContact, updateContact, deleteContact } = require("../controllers/contactController.js");
const validateToken = require("../middleware/validateTokenHandler.js");

router.use(validateToken);
router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(detailContact).put(updateContact).delete(deleteContact);

module.exports = router;