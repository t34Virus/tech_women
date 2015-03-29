var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var informationSchema = new Schema({
  author : { type: String, require: true },
  title : { type: String, require: true },
  body : { type: String, require: true },
  created_at : { type: Date, default: Date.now },
  photoURL: String 
});

module.exports = mongoose.model('information', informationSchema);