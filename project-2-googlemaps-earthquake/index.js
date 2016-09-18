var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var morgan = require('morgan');
var db = require('./models');
var app = express();

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/project-2-googlemaps', require('./controllers/project-2-googlemaps'));

console.log("You're listening to the smooth smooth sounds of http://localhost:3000");
var server = app.listen(process.env.PORT || 3000);

module.exports = server;
