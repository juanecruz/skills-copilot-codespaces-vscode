//create a web server that listens on port 3000 and responds with a message
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(3000);

console.log('Server started');