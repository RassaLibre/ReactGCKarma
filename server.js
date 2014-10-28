var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(3000); //the port you want to use
console.log('The server is listening on http://localhost:3000/');