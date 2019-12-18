const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    let filePath;

    switch(req.url) {
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
    }

    fs.readFile(filePath, function (err, data) {
        if(err) {
            console.log('error', err);
            return res.end('There is an error in reading the file');
        }
        return res.end(data);
    })
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
