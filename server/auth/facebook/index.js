'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false
  }))

  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie)
  
  .post('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie)
  
  .post('/token',
  passport.authenticate('facebook-token'),
  function (req, res) {
    var token = { "token" : auth.signToken( req.user.id )};
    res.send(JSON.stringify(token));
  }
);

module.exports = router;