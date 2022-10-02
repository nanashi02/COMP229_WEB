var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//TO ACCESS PORT/users/peter
router.get('/Peter', function(req, res, next) {
  res.send('Testing User.Js');
});

module.exports = router;
