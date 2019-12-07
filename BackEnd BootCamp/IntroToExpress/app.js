var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("hi there");
});

app.get("/bye", function(req,res){
	res.send("Goodbye...");
});

app.get("/dog", function(req,res){
	res.send("quack");
});

app.get("*", function(req,res){
	res.send("server error, no page exists");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server start");
});