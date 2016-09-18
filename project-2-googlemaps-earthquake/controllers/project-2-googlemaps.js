var express = require('express');
var db = require('./../models');
var router = express.Router();
//


router.get('/signup', function(req, res) {
  res.render('auth/signup');
});



// router.get('/', function(req, res) {
//   db.project-2-googlemaps.findAll().then(function(tacos) {
//     res.render('project-2-googlemaps/index', {tacos: tacos});
//   }).catch(function(err) {
//     res.status(500).render('error');
//   });
// });

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
// router.post('/', function(req, res) {
//   db.taco.create(req.body).then(function(taco) {
//     res.redirect('/tacos');
//   }).catch(function(err) {
//     res.status(500).render('error');
//   });
// });

module.exports = router;
