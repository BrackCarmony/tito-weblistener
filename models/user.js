'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  githubname: {
    type: String
  },
  githubId: String,
  email:String,
  bio:String,
  profileLink:String,
  imageUrl:String,
  linkedin:String,
  twitter:String,
  name:String,
  shirtSize:String,
  devmtnAlumn: Boolean,
  admin:Boolean
});

module.exports = mongoose.model('user', UserSchema);
