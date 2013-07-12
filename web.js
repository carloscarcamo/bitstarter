var express = require('express');
var fs = require("fs");
var FILE = "index.html";
var app = express.createServer(express.logger());


var returnContent = function(file){
    var file = file || FILE;
    var content = new Buffer(fs.readFileSync(file, 'utf-8'));
    return content.toString();
}

app.get('/', function(request, response) {
  response.send(returnContent());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
