var http = require('http');
var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.send('Hello world');
});

app.get('/apple/:id', function (req, res) {
	res.send(req.param("id"));
});

app.get('/test', function (req, res) {
	res.send(req.param("id"));
});

var server=app.listen(3000,function(){
	console.log("We have started our server on port 3000");
});