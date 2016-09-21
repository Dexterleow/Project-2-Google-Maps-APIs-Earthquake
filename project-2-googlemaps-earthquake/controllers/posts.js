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

// Get specified user's posts from Database
// app.get('/myProjects', isLoggedIn, function(req, res) {
//   res.render('myProjects',{ layout: 'myProjects' });
// });

router.get('/myProjects', function(req, res) {
  db.post.findAll().then(function(data) {
    console.log("Serving all projects");
    console.log(data);
    res.render('myProjects', {posts: data});
  });
});






//
// //Get the specififed post from Database
// router.get('/:id', function(req, res) {
//   db.taco.findById(req.params.id).then(function(taco) {
//     if (taco) {
//       res.render('tacos/show', {taco: taco});
//     } else {
//       res.status(404).render('error');
//     }
//   }).catch(function(err) {
//     res.status(500).render('error');
//   });
// });
//
// //posting this at allProjects.ejs
// router.post('/', function(req, res) {
//   db.p2.create(req.body).then(function(posts) {
//     res.redirect('/');
//   }).catch(function(err) {
//     res.status(500).render('error');
//   });
// });
//
// //Edit a specific post
// router.put('/:id', function(req, res) {
//   db.taco.findById(req.params.id).then(function(taco) {
//     if (taco) {
//       taco.updateAttributes(req.body).then(function() {
//         res.send({msg: 'success'});
//       });
//     } else {
//       res.status(404).send({msg: 'error'});
//     }
//   }).catch(function(err) {
//     res.status(500).send({msg: 'error'});
//   });
// });
//
// //Delete a specific post
// router.delete('/:id', function(req, res) {
//   db.taco.findById(req.params.id).then(function(taco) {
//     if (taco) {
//       taco.destroy().then(function() {
//         res.send({msg: 'success'});
//       });
//     } else {
//       res.status(404).send({msg: 'error'});
//     }
//   }).catch(function(err) {
//     res.status(500).send({msg: 'error'});
//   });
// });
//



// router.get('/new', function(req, res) {
//   res.render('tacos/new');
// });
//
// router.get('/:id/edit', function(req, res) {
//   db.taco.findById(req.params.id).then(function(taco) {
//     if (taco) {
//       res.render('tacos/edit', {taco: taco});
//     } else {
//       res.status(404).render('error');
//     }
//   }).catch(function(err) {
//     res.status(500).render('error');
//   });
// });
//

module.exports = router;
