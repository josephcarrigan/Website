var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.get('/HomeEnglish', function(req, res, next) {
  res.render('HomeEnglish', { title: 'Welcome!' });
});

module.exports = router;
