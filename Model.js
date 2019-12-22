const mongoose = require('mongoose');

// creating the schema/model for moongoose
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// Create a collection named Contact in the database which models the schema above(contactSchema)
const Contact = mongoose.model('Contact', contactSchema);

//export the collection
module.exports = Contact;
