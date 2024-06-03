const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type : String,
        required : [true, "Please, add the name field."]
    },
    email: {
        type : String,
        required : [true, "Please, add the email field."],
        unique : [true, "Email already taken."]
    },
    password: {
        type : String,
        required : [true, "Please, add the password field."]
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);