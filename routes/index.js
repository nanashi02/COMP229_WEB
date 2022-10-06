var express = require('express');
var router = express.Router();

var userNme;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Main_template', 
    { 
      title: 'Home',
    }),
  console.log("~~~~~~ HOME ~~~~~~~~~ ")
});

/* GET home page With Thank You Message */
router.get('/ThankYou', function(req, res, next) {
  res.render('Main_template', 
    { 
      title: 'Home',
      user: userNme
    }),
  console.log("~~~~~~ HOME ~~~~~~~~~ ")
  console.log("Home Now " + userNme)
});

/* POST home page With Thank You Message */
router.post('/ThankYou', function(req, res, next) {
  userNme = req.body.firstName;
    console.log(req.body.firstName)
    console.log(req.body.emailAd)
    res.redirect('/ThankYou')
    console.log("test run")
});


/* GET About Me page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('Main_template', 
    { 
      title: 'AboutMe'
    }),
    console.log("~~~~~~ ABOUT ME ~~~~~~~~~ ")
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('Sec_template', 
    { 
      title: 'Projects'
    }),
    console.log("~~~~~~ PROJECTS ~~~~~~~~~ ")
});

/* GET Projects page. */
router.get('/Services', function(req, res, next) {
  res.render('Sec_template', 
    { 
      title: 'Services'
    }),
    console.log("~~~~~~ SERVICES ~~~~~~~~~ ")
});

/* GET Contact page. */
router.get('/ContactMe', function(req, res, next) {
  res.render('Sec_template', 
    { 
      title: 'ContactMe'
    }),
    console.log("~~~~~~ CONTACTS ~~~~~~~~~ ")
});


module.exports = router;
