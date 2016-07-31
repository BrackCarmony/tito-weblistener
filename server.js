'use strict'

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/server');
var register = require('./controllers/register');

app.use(bodyParser.json());
mongoose.connect(config.dbUri);

app.post('/api/test', register.register);


app.listen(config.port, function(){
  console.log("Webhooks listening on port:", config.port);
})
