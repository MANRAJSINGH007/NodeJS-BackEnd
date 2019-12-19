const express = require('express');
const path = require('path');
const port = 8000;

const app = express(); 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
    return res.redirect('/practice');
});

app.listen(port, function(err) {
    if(err) { 
        console.log('Error in running the server', err);
        return ;
    } else {
        console.log('Server is up and running on port: ', port);
    }
});

{/* <html>
    <head>
        <title>
            <%= title %>
        </title>
    </head>
    <body>
        <h1>ContactList</h1>
        <div>
            <ul>
                <% for(let i of contact_list) { %>
                    <li>
                        <p><%= i.name %></p>
                        <p><%= i.phone %></p>
                    </li>
                <% } %>
            </ul>
        </div>

        <form action="/create-contact" method="POST">
            <input type="text" name="name" placeholder="Enter Name" required>
            <input type="number" name="phone" placeholder="Enter Phone Number" required>
            <button type="submit">Add Contact</button>
        </form>
    </body>
</html> */}
