const express = require('express')
const routes = express()
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
var passport = require('passport')

//  controller consts
const userController = require('./controllers/userController')
const imageController = require('./controllers/imageController')

//  Registration Routes
routes.post('/image-upload', upload.single('file'), imageController.post)
//  auth routes

routes.post('/register', userController.register)

routes.get('/login', function (req, res) {
  res.render('login', { user: req.user })
})

routes.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
  req.session.save((err) => {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
})

routes.get('/logout', (req, res, next) => {
  req.logout()
  req.session.save((err) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

routes.get('/user', (req, res) => {
  console.log('Data in routes.js', req.user)
  return res.status(200).json({
    succes: true,
    data: req.user
  })
})

module.exports = routes
