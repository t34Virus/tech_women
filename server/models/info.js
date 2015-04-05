var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var informationSchema = new Schema({
  author : String,
  title : String,
  body : String,
  created_at : { type: Date, default: Date.now },
  photoURL: String 
});

module.exports = mongoose.model('information', informationSchema);