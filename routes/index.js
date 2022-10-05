var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Main_template', 
    { 
      title: 'Home'
    }),
  console.log("~~~~~~ HOME ~~~~~~~~~ ")
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
}).post('/', function(req, res) {
    console.log(req.body.firstName)
    console.log(req.body.emailAd)
    res.redirect('/ContactMe')
});


module.exports = router;
