var express = require('express');
var router = express.Router();
var troubleTicketCollection = require('../models/TroubleTicket');




/* GET home page. */
router.get('/',(req, res, next) =>{
  troubleTicketCollection.find({}, (errors, results)=>{
    if(errors) res.send(errors);
    else res.send(results);
  });
});


router.get('/tickets/seeddata/:name/:problem/:date', (req, res)=>{
  troubleTicketCollection.create({
    ticket_person_reporting: req.params.name,
    ticket_problem_description: req.params.problem,
    ticket_date: req.params.date
  }, (errors)=>{
    if (errors) res.send(errors);
    else res.send("Created!!!");
  })
});


module.exports = router;
