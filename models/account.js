// link to mongoose
var mongoose = require('mongoose');
// var plm = require('mongoose');
var plm = require('passport-local-mongoose');

var accountSchema = new mongoose.Schema({
    //empty schema is ok as passport defines username/ password
});

accountSchema.plugin(plm);

//make this public by exporting it
module.exports =  mongoose.model('Account',accountSchema);