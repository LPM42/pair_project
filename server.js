var express = require('express');
var http = require('http');
var request = require('request');
var fs = require('fs');

var app = express();


app.get('/', function (request, response) {
	response.send({'Present': 'Hello! A cute cat has been transported to your project folder'});
});	

request('http://scienceblogs.com/gregladen/files/2012/12/Beautifull-cat-cats-14749885-1600-1200-590x442.jpg')
	.pipe(fs.createWriteStream('cat.jpeg'));

var server = http.createServer(app);

server.listen(3000, function() {
	console.log("Server runnning on port 3000");
});