var express = require('express');
const { response } = require('../app');
var router = express.Router();
var responses = [
"Wrong username or password.",
"Username already exists",
"Passwords do not match",
"lol easter egg"
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.njk', { title: 'Homepage', user: req.session.user });
});
router.get('/login', function(req, res, next) {
  res.render('login.njk', { title: 'login', response: responses[req.query.response]||null, user: req.session.user });
});
router.get('/secret', function(req, res, next) {
  if(!req.session.user) return res.redirect("/login");
  res.render('secret.njk', { title: 'secret', user: req.session.user });
});
router.get('/register', function(req, res, next) {
  res.render('register.njk', { title: 'register', response: responses[req.query.response]||null, user: req.session.user });
});

module.exports = router;
