'use strict'

var async = require('asyncawait/async');
var await = require('asyncawait/await');

var Attendee = require('../models/attendee');
var Course = require('../models/course');
var User = require('../models/user');

var register = async(function(req, res, next){
  console.log("\n\n\nbody\n",req.body);
  console.log("\n\n\ntickets\n",req.body.tickets);
  console.log("\n\n\line_items\n",req.body.line_items);

});

module.exports = { register:register};


// function register (req, res, next){
//     console.log(req);
//     logger.log("Tickets \n\n", req.body.tickets);
//     logger.log("Line Items \n",req.body.line_items);
//     req.body.tickets.forEach(function(ticket, ticketIndex){
//         var question = _.find(ticket.answers,{question:{title:"Github Username"}});
//         if (!question) return;
//
//         var username = question.response.trim().toLowerCase();
//         if(!username) return;
//
//         User.findOne({githubname:username}).then(function(response){
//            if(!response){
//             response = new User({githubname:username});
//            }
//             Attendee.create({
//                 userId:response._id,
//                 role:'student',
//                 medium:ticket.release_title ,
//                 slug:ticket.slug,
//                 courseId:req.Course._id
//             }).then(function(response){
//                 logger.log("new attendee\n\n", response)
//                 if(ticketIndex === req.body.tickets.length-1){
//                     res.send("All Tickets Processed");
//                 }
//             })
//         });
//     })
// }
