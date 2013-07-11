var express = require('express'), sys=require("sys"), fs=require("fs");

var app = express.createServer(express.logger());

var indexhtmlin = fs.readFileSync("index.html");

var buf = new Buffer(indexhtmlin);

var indexhtml = buf.toString('utf-8');

console.log(indexhtml);

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
