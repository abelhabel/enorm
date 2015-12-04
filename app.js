var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/require', function(req, res) {
  res.sendFile(__dirname + '/node_modules/no-eval-require/index.js');
});

app.get('/js/:fileName', function(req, res) {
  res.sendFile(__dirname + '/' + req.params.fileName);
});

app.get('/css/:fileName', function(req, res) {
  console.log(req.params.fileName);
  res.sendFile(__dirname + '/css/' + req.params.fileName);
});

app.get('/js/controller/:fileName', function(req, res) {
  res.sendFile(__dirname + '/controller/' + req.params.fileName);
});

app.get('/js/data/:fileName', function(req, res) {
  res.sendFile(__dirname + '/data/' + req.params.fileName);
});

app.get('/js/structure/:fileName', function(req, res) {
  res.sendFile(__dirname + '/structure/' + req.params.fileName);
});

app.listen(3000);
