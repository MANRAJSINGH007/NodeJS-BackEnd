// requiring the ODM layer which will make interaction with the mongoDB database easier
// ODM is for Object Document Mapper
const mongoose = require('mongoose');
//Connect the ODM to the mongoDB database
mongoose.connect('mongodb://localhost/contacts_list_db');

//Verify the connection to the database
const db = mongoose.connection;

// if there is an error print error on console
db.on('error', console.error.bind(console, 'error connecting to the db'));

// if it is up and running 
db.once('open', function(){
    console.log('Successfully connected to the database');
})
