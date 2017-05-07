/**
 * Created by jesse on 03/05/17.
 */
var config = require('./config.json');

var http = require('http');
var express = require('express');

var app = express();

app.set('PORT', config.webPort);
var port = app.get('PORT');

app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
});

app.use('/api/v1', require('./routes/routes_api_v1'));

app.use('/api/v2', require('./routes/routes_api_v2'));

app.listen(port, function() {
    console.log('Server is running on port 8080');
});

module.exports = app;
