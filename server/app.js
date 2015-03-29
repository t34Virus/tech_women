var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var methodOverride = require('method-override');
var information = require('./controllers/information');
var mongoose = require('mongoose');
var jade = require('jade');
mongoose.connect('mongodb://admin:'+process.env.DBPASS+'@ds031571.mongolab.com:31571/tech_women');

// serves static assets
app.use(express.static(__dirname + '/../public'));
app.use(cookieParser());
app.use(methodOverride('_method'));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());
app.set('view engine', 'jade');

app.use('/information', information);
// renders main information page
app.get('/', information.list);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});