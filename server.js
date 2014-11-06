var express = require('express');
var http = require('http');

var app = express();

app.use(function(request, response, next){
	console.log(request.method + ": " + request.url);
	next();
});

app.get('/', function(request, response){
	response.send('Hello Express.!!');
});

http.createServer(app).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
