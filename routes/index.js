var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.njk', { title: 'Homepage' });
});
router.get('/login', function(req, res, next) {
  res.render('login.njk', { title: 'login' });
});
router.get('/secret', function(req, res, next) {
  res.render('secret.njk', { title: 'secret' });
});
router.get('/register', function(req, res, next) {
  res.render('register.njk', { title: 'register' });
});

module.exports = router;
