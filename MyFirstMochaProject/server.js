/**
 * Created by jesse on 03/05/17.
 */
var config = require('./config.json');

var http = require('http');
var express = require('express');

var app = express();

app.set('PORT', config.webPort);

app.listen(8080, function() {
    console.log('Server is running on port 8080');
});

module.exports = app;
