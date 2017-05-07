/**
 * Created by jesse on 03/05/17.
 */
// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/recipes', function(request, response) {
    var recipes = require('../recipes');
    response.status(200);
    response.json(recipes);
});

router.get('*', function(request, response) {
    response.status(200);
    response.json({
        "description": "Dit is een leuke server"
    });
});

module.exports = router;
