var express = require('express');
var fs = require("fs");
var FILE = "index.html"; //default file
var app = express.createServer(express.logger());


var returnContent = function(file){
    var file = file || FILE;
    var content = new Buffer(fs.readFileSync(file));
    return content.toString();
}

app.get('/', function(request, response) {
  response.send(returnContent());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
