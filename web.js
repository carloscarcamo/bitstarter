var express = require('express');
var fs = require("fs");
var file = "index.html";
var app = express.createServer(express.logger());
var content = new Buffer(fs.readFile(file));

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
