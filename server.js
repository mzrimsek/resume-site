var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = 3000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve("./dist")));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(port);
console.log("Server started on port " + port);
exports = module.exports = app;
