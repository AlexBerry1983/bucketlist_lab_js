var express = require('express');
var app = express();
var countriesRouter = express.Router();

var CountriesQuery = require('../db/countriesQuery.js');
var query = new CountriesQuery();

countriesRouter.get('/', function(req, res){
  query.all(function(countriesArray){
    res.json(countriesArray);
  })
})

module.exports = countriesRouter;
