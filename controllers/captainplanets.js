var express = require('express')
var db = require('./../models')
var router = express.Router()
var multer = require('multer');
var upload = multer({ dest: './uploads/' });
var cloudinary = require('cloudinary');


function isUsersCP (req, captainplanet) {
  if (req.user.id !== captainplanet.userId) {
    req.flash('error', 'You cannot do that')
    res.redirect('/captainplanets')
    return false
  }
  return true
}

router.get('/', function (req, res) {
  if (req.query.filter) {
    req.user.getCaptainplanets().then(function (captainplanets) {
      res.render('captainplanets/index', {captainplanets: captainplanets, title: 'My Project'})
    }).catch(function (err) {
      res.status(500).render('error')
    })
  } else {
    db.captainplanet.findAll().then(function (captainplanets) {
      res.render('captainplanets/index', {captainplanets: captainplanets, title: 'All Projects'})
    }).catch(function (err) {
      res.status(500).render('error')
    })
  }
})

router.get('/new', function (req, res) {
  res.render('captainplanets/new')
})

router.get('/:id/edit', function (req, res) {
  db.captainplanet.findById(req.params.id).then(function (captainplanet) {
    if (captainplanet) {
      if (!isUsersCP(req,captainplanet)) return
      res.render('captainplanets/edit', {captainplanet: captainplanet})
    } else {
      res.status(404).render('error')
    }
  }).catch(function (err) {
    res.status(500).render('error')
  })
})

router.get('/:id', function (req, res) {
  db.captainplanet.findById(req.params.id).then(function (captainplanet) {
    if (captainplanet) {
      res.render('captainplanets/show', {captainplanet: captainplanet})
    } else {
      res.status(404).render('error')
    }
  }).catch(function (err) {
    res.status(500).render('error')
  })
})

router.put('/:id', function (req, res) {
  db.captainplanet.findById(req.params.id).then(function (captainplanet) {
    if (captainplanet) {
      if (!isUsersCP(req,captainplanet)) return
      captainplanet.updateAttributes(req.body).then(function () {
        res.send({msg: 'success'})
      })
    } else {
      res.status(404).send({msg: 'error'})
    }
  }).catch(function (err) {
    res.status(500).send({msg: 'error'})
  })
})

router.delete('/:id', function (req, res) {
  db.captainplanet.findById(req.params.id).then(function (captainplanet) {
    if (captainplanet) {
      if (!isUsersCP(req,captainplanet)) return
      captainplanet.destroy().then(function () {
        res.send({msg: 'success'})
      })
    } else {
      res.status(404).send({msg: 'error'})
    }
  }).catch(function (err) {
    res.status(500).send({msg: 'error'})
  })
})

router.post('/', upload.single('myFile'), function(req, res) {
  cloudinary.uploader.upload(req.file.path, function(result) {
    console.log(result);
    req.body.picture = result.url
    req.user.createCaptainplanet(req.body).then(function (captainplanet) {
      res.redirect('/captainplanets')
    }).catch(function (err) {
      res.status(500).render('error')
    })
  });

})


module.exports = router
