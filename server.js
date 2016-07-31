'use strict'

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var config = require('./config/server');
var register = require('./controllers/register');


mongoose.connect(config.dbUri);

app.get('/api/test', register.register);


app.listen(config.port, function(){
  console.log("Webhooks listening on port:", config.port);
})
