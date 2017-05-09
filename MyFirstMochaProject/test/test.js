/**
 * Created by jesse on 09/05/17.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('API Test', function() {
    it('Test GET /api/v2/recipes', function(done) {
        chai.request(server)
            .get('/api/v2/recipes')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('API Test', function() {
    it('Test GET /api/v2/recipes/info', function(done) {
        chai.request(server)
            .get('/api/v2/recipes/info')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('API Test', function() {
    it('Test GET /api/v2/recipes/4', function(done) {
        chai.request(server)
            .get('/api/v2/recipes/4')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('API Test', function() {
    it('Test GET /api/v2/recipes', function(done) {
        chai.request(server)
            .get('/api/v2/recipes')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('API Test', function() {
    it('Test GET /api/v2/recipes?category=Meats', function(done) {
        chai.request(server)
            .get('/api/v2/recipes')
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});