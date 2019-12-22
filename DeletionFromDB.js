const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express(); 

// set template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// signifies Middleware
// express.urlencoded() is a function which is being called before every controller that is encoded
app.use(express.urlencoded());

// for static files like the css file and styles being applied to the ejs file 
app.use(express.static('assets'));

// // middleware1
// // next passes on what changes have been done and calls the next middleware
// app.use(function(req, res, next) {
//     req.name = 'hello';
//     console.log('middleware1 called');
//     next();
// });

// //middleware2 
// app.use(function(req, res, next){
//     console.log(req.name);
//     next();
// });

// var contactList = [
//     { 
//         name: "Manraj",
//         phone: "0000000"
//     },
//     {
//         name: "Amit",
//         phone: "1111111"
//     },
//     {
//         name: "Ankit",
//         phone: "2222222"
//     }
// ]

app.get('/', function(req, res){

    // get the list of contacts from the database
    // you can pass a query in the curly braces to filter the list like {name: 'abc'}
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('error in fetching contacts from db');
            return;
        } else{
            res.render('home', {
                title: 'My Contacts List',
                contact_list: contacts
            })
        }
    });

    // return res.render('home', {
    //     title : "My Contacts List",
    //     contact_list: contactList
    // });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title : "Practice Page"
    });
});

app.post('/create-contact', function(req, res){

    // create a new contact in the database, that is a new document in the collection Contact
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if(err){
            console.log('Error in creating a contact');
            return;
        } else{
            console.log('New Contact has been created: ', newContact);
            return res.redirect('back');
        }
    })

    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    // return res.redirect('/');
    // return res.redirect('/practice');
});

app.get('/delete-contact/', function(req, res){

    // get the id from query in the url
    let id = req.query.id;
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in deleting an object from database');
            return ;
        }
        return res.redirect('back');
    })


    // console.log(req.query);
    // let phone = req.query.phone;
    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    // if(contactIndex != -1){
    //     contactList.splice(contactIndex, 1);
    // }
    // res.redirect('back');
});

app.listen(port, function(err) {
    if(err) { 
        console.log('Error in running the server', err);
        return ;
    } else {
        console.log('Server is up and running on port: ', port);
    }
});

