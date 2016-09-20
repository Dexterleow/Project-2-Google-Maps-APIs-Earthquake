
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
var isLoggedInPost = require('./middleware/isLoggedInPost');
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

// After User is logged in
// Get all post of a User
app.get('/myProjects', isLoggedIn, function(req, res) {
  res.render('myProjects',{ layout: 'myProjects' });
});


app.get('/allProjects', function(req, res) {
  res.render('allProjects',{ layout: 'allProjects' });
});

app.use('/auth', require('./controllers/auth'));



// After User is logged in
//Create post
app.post('/postform', isLoggedInPost, function (req, res) {
  res.render('createPost');
}); //must be linked to the submit button in the form

//Edit Post (by id)
app.put('/posts/:id',isLoggedInPost, function (req, res) {
  res.render('editPost')
});
// Delete Post (by id)
app.delete('/posts/:id',isLoggedInPost, function (req, res) {
  res.render('editPost')
});

app.post('earthquakes', isLoggedIn, function (req, res) {
  res.render('Markers');
}); //Giving Logged in Users some special functions



//ErrorHandler
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});
// handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
  res.send(err.message || '** no unicorns here **');
});


console.log("You're listening to the smooth smooth sounds of http://localhost:3000");

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
