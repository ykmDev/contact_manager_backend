const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please, add the contact name."],
    },
    email: {
        type: String,
        required: [true, "Please, add the email."]
    },
    phone: {
        type: String,
        required: [true, "Please, add the phone number."]
    },
}, {timestamps: true});

module.exports = mongoose.model("Contact", contactSchema);
