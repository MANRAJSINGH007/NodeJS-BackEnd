const express = require('express');
const port = 8000;

const app = express();

app.get('/', function(req, res){
    res.send('Cool, it is running');
});

app.listen(port, function(err) {
    if(err) { 
        console.log('Error in running the server', err);
        return ;
    } else {
        console.log('Server is up and running on port: ', port);
    }
});
