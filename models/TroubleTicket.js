
// linking mongoose
var mongoose = require('mongoose');
//callijng schema functions
var Schema = mongoose.Schema;
// creating model for schema
var TroubleTicket = new Schema({
    ticket_person_reporting: String,
    ticket_problem_description: String,
    ticket_date:Date
});
// exporting to app
module.exports = mongoose.model('TroubleTicket', TroubleTicket);