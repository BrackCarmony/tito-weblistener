'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AttendeeSchema = new Schema({
  userId:{type:Schema.Types.ObjectId, ref:'user'},
  role:{type:String, enum:['instructor', 'mentor', 'student']},
  medium:{type:String},
  //price:Number,
  checked_in:Boolean,
  //discountPercent:Number,
  //discountType:Number,
  courseId:{type:Schema.Types.ObjectId, ref:'course'},
  //orderId:{type:Schema.Types.ObjectId, ref:'order'},
});

module.exports = mongoose.model('attendee', AttendeeSchema);
