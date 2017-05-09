/**
 * Created by jesse on 03/05/17.
 */
// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/recipes/:number', function(request, response, next) {
    var recipes = require('../recipes');
    var number = request.params.number || '';

    var num = recipes.filter(function(n) {
        return (n.id === number);
    });

    response.status(200);
    response.json(num);
});

router.get('/recipes', function(request, response, next) {
    var recipes = require('../recipes');


    var category = request.query.category;

    if(category) {
        var cat = recipes.filter(function (c) {
            return (c.category === category);
        });
        response.status(200);
        response.json(cat);
    } else {
        next();
    }
});

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
