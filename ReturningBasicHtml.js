

// Returning Basic HTML by passing information through the Headers 

const http = require('http');
const port = 8000;

function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1>Response from Server</h1>');
}

const server = http.createServer(requestHandler);
server.listen(port, function(err) {
    if(err){
        console.log('There is an error');
        return ;
    } else{
        console.log('Server is up and running on port: ', port);
        return ;
    }
})
