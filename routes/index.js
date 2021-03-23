var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'PT Pods | Homepage',
  	description: 'Self-contained gym pods, state-of-the-art training equipment, video stremaing and in-house entertainment.', 
  });
});

/* GET ABOUT page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
  	title: 'PT Pods | About Us',
  	description: 'Self-contained gym pods, state-of-the-art training equipment, video stremaing and in-house entertainment.',
  });
});

module.exports = router;
