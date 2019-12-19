const express = require('express');
const path = require('path');
const port = 8000;

const app = express(); 

// set template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// signifies middleware
app.use(express.urlencoded());

var contactList = [
    {
        name: "Manraj",
        phone: "0000000"
    },
    {
        name: "Amit",
        phone: "1111111"
    },
    {
        name: "Ankit",
        phone: "2222222"
    }
]

app.get('/', function(req, res){
    return res.render('home', {
        title : "My Contacts List",
        contact_list: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title : "Practice Page"
    });
});

app.post('/create-contact', function(req, res){
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    return res.redirect('/');
    // return res.redirect('/practice');
});

app.listen(port, function(err) {
    if(err) { 
        console.log('Error in running the server', err);
        return ;
    } else {
        console.log('Server is up and running on port: ', port);
    }
});

