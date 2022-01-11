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