const http = require('http');
const port = 8000;

function requestHandler(req, res) {
    console.log(req.url);
    res.end('Response from Server');
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
