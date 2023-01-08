const mongoose = require('mongoose')

const contactSchema= new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        default: false
    },
    phonenumber: {
        type: String,
        required: true,
        default: false
    }
});

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
