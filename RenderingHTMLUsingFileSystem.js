const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    fs.readFile('./index.html', function(err, data) {
        if(err) {
            console.log('There is an error in reading the file');
            return res.end('<h1>Error</h1>');
        } else{
            return res.end(data);
        }
    })
    // res.end('<h1>Response from Server</h1>');
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
