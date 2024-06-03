const asyncHander = require("express-async-handler");

/*
@desc Get all contacts
@route GET /api/contacts
@access public
*/
const getContacts = asyncHander(async (req,res) => {
    res.status(200).json({
      "message" : `Get all contacts`
    });
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
    res.status(201).json({
        "message" : `Register contact`,
    });
})

/*
@desc Get Detail contact
@route GET /api/contacts/:id
@access public
*/
const detailContact = asyncHander(async (req,res) => {
    console.log(req.params);
    res.status(200).json({
      "message" : `Detail contact for ID: ${req.params.id}`
    });
});

/*
@desc Update Detail contact
@route PUT /api/contacts/:id
@access public
*/
const updateContact = asyncHander(async (req,res) => {
    console.log(req.params);
    res.status(200).json({
      "message" : `Update contact for ID: ${req.params.id}`
    });
});

/*
@desc Delete contact
@route DELETE /api/contacts/:id
@access private
*/
const deleteContact = asyncHander(async (req,res) => {
    console.log(req.params);
    res.status(201).json({
      "message" : `Delete contact for ID: ${req.params.id}`
    });
});

module.exports = {
    getContacts,
    createContact,
    detailContact,
    updateContact,
    deleteContact
}