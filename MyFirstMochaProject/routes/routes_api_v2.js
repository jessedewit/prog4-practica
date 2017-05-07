/**
 * Created by jesse on 03/05/17.
 */
// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('*', function(request, response) {
    response.status(200);
    response.json({
        "description": "Dit is een leuke server"
    });
});

module.exports = router;
