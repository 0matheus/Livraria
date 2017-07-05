var express = require('express');
var app = module.exports = express();
var bodyParser = require ('body-parser');
var serveStatic = require('serve-static')

// app.listen(5000);
app.use(serveStatic(__dirname + '/public', {'index' : ['index.html']})).listen(5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


// var http = require('http');
// var fs  = require('fs');
// var path = require('path');
// var mime = require('mime');
// var cache = {};

// function send404(response) {
//   response.writeHead(404, {'Content-Type': 'text/plain'});
//   response.write('Error 404: resource not found.');
//   response.end();
// }

// function sendFile(response, filePath, fileContents) {
//   response.writeHead(
//     200, 
//     {"content-type": mime.lookup(path.basename(filePath))}
//   );
//   response.end(fileContents);
// }

// function serveStatic(response, cache, absPath) {
//   if (cache[absPath]) {
//     sendFile(response, absPath, cache[absPath]);
//   } else {
//     fs.exists(absPath, function(exists) {
//       if (exists) {
//         fs.readFile(absPath, function(err, data) {
//           if (err) {
//             send404(response);
//           } else {
//             cache[absPath] = data;
//             sendFile(response, absPath, data);
//           }
//         });
//       } else {
//         send404(response);
//       }
//     });
//   }
// }

// var server = http.createServer(function(request, response) {
//   var filePath = false;

//   if (request.url == '/') {
//     filePath = 'public/index.html';
//   } else {
//     filePath = 'public' + request.url;
//   }

//   var absPath = './' + filePath;
//   serveStatic(response, cache, absPath);
// });

// server.listen(5000, function() {
//   console.log("Server listening on port 5000.");
// });

// // var chatServer = require('./lib/chat_server');
// // chatServer.listen(server);
