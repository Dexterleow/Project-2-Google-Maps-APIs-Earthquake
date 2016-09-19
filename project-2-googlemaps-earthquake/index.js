
var express = require('express');

var layout = require('express-layout');

var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var passport = require('./config/ppConfig');
var session = require('express-session');
var flash = require('connect-flash');
var morgan = require('morgan');
var NODE_ENV = require("node-env")
var db = require('./models');
var isLoggedIn = require('./middleware/isLoggedIn');
var app = express();
var session = require('express-session');

app.set('view engine', 'ejs');


app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
//Give a default layout
// app.use(ejsLayouts);
app.use(layout());

app.set('view options', { layout: false });




app.use(express.static(__dirname + '/public/'));
app.use(session({
  secret: process.env.SESSION_SECRET || 'donttellanybody',
  resave: false,
  saveUninitialized: true
}));

/*
 * Include the flash module by calling it within app.use().
 * IMPORTANT: This MUST go after the session module
 */
app.use(flash());
// initialize the passport configuration and session as middleware
app.use(passport.initialize()); //position  and orders are very important. need to initialize before session.
app.use(passport.session());
app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});



app.get('/', function(req, res) {
  res.render('index',{ layout: 'layout' });
});



app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile',{ layout: '404page' });
// //   res.render('layout.ejs', {
//   layout: false;
// // });
});


app.post('earthquakes', isLoggedIn, function (req, res) {
  res.render('Markers');
}); //Giving Logged in Users some special functions

app.use('/auth', require('./controllers/auth'));

console.log("You're listening to the smooth smooth sounds of http://localhost:3000");

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
