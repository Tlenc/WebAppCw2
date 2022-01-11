const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static('public'))

// the 'logger' middleware
app.use(function(req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
});

// GET route to grab all information
app.get("/lessons", function(req, res) {
    let fs = require('fs');
    fs.readFile("lessons.js", "utf8", function(err, data){
       if(err) throw err;
       res.send(data);
     });   
});

app.get("/user", function(req, res) {
    res.json({'email': 'user@email.com', 'password': 'mypassword'});
});