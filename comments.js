// Create web server
var http = require('http');
var fs = require('fs');
var path = require('path');

//create a server
http.createServer(function(req, res) {
  //parse the filename
  var file = path.normalize('.' + req.url);
  console.log('Trying to serve', file);

  //route the file
  function reportError(err) {
    console.log(err);
    res.writeHead(500);
    res.end('Internal Server Error');
  }

  //check if the file exists and read it
  fs.exists(file, function(exists) {
    if (exists) {
      fs.stat(file, function(err, stat) {
        var rs;
        if (err) {
          return reportError(err);
        }
        if (stat.isDirectory()) {
          res.writeHead(403);
          res.end('Forbidden');
        } else {
          rs = fs.createReadStream(file);
          rs.on('error', reportError);
          res.writeHead(200);
          rs.pipe(res);
        }
      });
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });
}).listen(3000);
