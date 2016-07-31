'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
  name: {type: String, unique: true, required: true},
  desc: {type: String, required: true},
  badgeImg: {type: String},
  mainImg: {type: String},
  prereqs:{type:Array, required:true},
  venue:{type:String},
  videoClip: {type:String, unique:true},
  dates:[{type:Date}],
  price:{online:Number, live:Number},
  curriculumSchedule: {},
  frameworks: {},
  event:{type:String}
});

module.exports = mongoose.model('course', CourseSchema);
