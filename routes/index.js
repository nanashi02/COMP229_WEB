var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Main', 
    { 
      title: 'Home',
      name: 'Peter' 
    }),
  console.log("~~~~~~ HOME ~~~~~~~~~ ")
});

/* GET About Me page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('Main', 
    { 
      title: 'AboutMe',
      name: 'Peter' 
    }),
    console.log("~~~~~~ ABOUT ME ~~~~~~~~~ ")
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('Secondary', 
    { 
      title: 'Projects',
      name: 'Peter' 
    }),
    console.log("~~~~~~ PROJECTS ~~~~~~~~~ ")
});

/* GET Projects page. */
router.get('/Services', function(req, res, next) {
  res.render('Secondary', 
    { 
      title: 'Services',
      name: 'Peter' 
    }),
    console.log("~~~~~~ SERVICES ~~~~~~~~~ ")
});

/* GET Projects page. */
router.get('/ContactMe', function(req, res, next) {
  res.render('Secondary', 
    { 
      title: 'ContactMe',
      name: 'Peter' 
    }),
    console.log("~~~~~~ CONTACTS ~~~~~~~~~ ")
});




module.exports = router;
