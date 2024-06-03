const asyncHander = require("express-async-handler");
const Contact = require("../models/contactModel.js");
/*
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getContacts = asyncHander(async (req,res) => {
  const contacts = await Contact.find();
    res.status(200).json(contacts);
});

/*
@desc Register contacts
@route POST /api/contacts
@access public
*/
const createContact = asyncHander(async (req,res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const contact = await Contact.create({
      name,
      email,
      phone
    });
    res.status(201).json(contact);
})

/*
@desc Get Detail contact
@route GET /api/contacts/:id
@access public
*/
const detailContact = asyncHander(async (req,res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if(!contact){
      res.status(404);
      throw new Error("Contact Not Found!");
    }
    res.status(200).json(contact);
});

/*
@desc Update Detail contact
@route PUT /api/contacts/:id
@access public
*/
const updateContact = asyncHander(async (req,res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if(!contact){
    res.status(404);
    throw new Error("Contact Not Found!");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    id,
    req.body,
    {new: true}
  );
  res.status(200).json(updateContact);
});

/*
@desc Delete contact
@route DELETE /api/contacts/:id
@access private
*/
const deleteContact = asyncHander(async (req,res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if(!contact){
    res.status(404);
    throw new Error("Contact Not Found!");
  }
  const deleteContact = await Contact.findByIdAndDelete(id);
  res.status(200).json(deleteContact);
});

module.exports = {
    getContacts,
    createContact,
    detailContact,
    updateContact,
    deleteContact
}