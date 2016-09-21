var express = require('express');
var db = require('../models');
var router = express.Router();


//Get all posts from Database
router.get('/allProjects', function(req, res) {
  db.post.findAll().then(function(data) {
    console.log("Serving all projects");
    console.log(data);
    res.render('allProjects', {posts: data});
  });
});

//Get post from the logged in user
router.get('/myProjects', function(req, res) {
  db.post.findAll().then(function(data) {
    console.log("Serving my projects");
    console.log(data);
    res.render('myProjects', {posts: data});
  });
});

//Creating post from the logged in user
router.post('/', function(req, res) {
  db.post.findOrCreate({
    where: {
      projectTitle: req.body.projectTitle
    },
    defaults: {
      picture: req.body.picture,
      category: req.body.category,
      description: req.body.description,
      userid: parseInt(req.body.userid, 10),
    }
  }).spread(function(post, created) {
    console.log('created: ', created);
    console.log('post: ', post);

    res.json(post)
    // res.render('myProjects', {post: post});
  });
});


module.exports = router;
