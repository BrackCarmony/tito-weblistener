'use strict'

var async = require('asyncawait/async');
var await = require('asyncawait/await');
var _ = require('lodash');

var Attendee = require('../models/attendee');
var Course = require('../models/course');
var User = require('../models/user');

var register = async(function(req, res, next){
  if (!req.body.tickets) return;
  console.log("\n\n\nbody\n",req.body);
  console.log("\n\n\ntickets\n",req.body.tickets);
  console.log("\n\n\line_items\n",req.body.line_items);
  var course = await(Course.findOne({event:req.body.event.slug}))
  // console.log("\n\n\nCourse\n",course);
  req.body.tickets.forEach(function(ticket) {
    var question = _.find(ticket.answers,{question:{title:"Github Username"}});
    if (!question) return;
    var username = question.response.trim().toLowerCase();
    if(!username) return;
    // console.log('\n\ngithubname:\n', username)
    var attendee = await(Attendee.findOne({slug:ticket.slug}));
    if (!attendee) attendee = new Attendee();
    // console.log('\n\nattendee:\n', attendee)
    var user = await(User.findOne({githubname:username}));
    if (!user) {
      user = new User({githubname:username, email:ticket.email, name:ticket.name})
      await(user.save());
    }
    // console.log('\n\nuser:\n', user)
    attendee.courseId = course._id;
    attendee.userId = user._id;
    attendee.slug = ticket.slug;
    attendee.meium = ticket.release_title
    // console.log('\n\nattendee:\n', attendee)
    var temp = await(attendee.save());
    // console.log(temp);
  });
});

module.exports = { register:register};
