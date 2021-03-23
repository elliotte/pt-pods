var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient
  // , assert = require('assert');

// Connection URL

// Use connect method to connect to the Server
var url = 'mongodb://master-user:1234monea1234@ds013574.mlab.com:13574/friends-of-sullivan';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  // var user = JSON.stringify(req.body)
  MongoClient.connect(url, function(err, db) {
	    // assert.equal(null, err);
	    //console.log("Motherfucker - connected correctly to server!");
		
		var user = req.body;
	    // console.log('Adding user: ' + JSON.stringify(user));

	    db.collection('users', function(err, collection) {
	        collection.insert(user, {safe:true}, function(err, result) {
	            if (err) {
	                res.send({'error':'An error has occurred'});
	            } else {
	                console.log('Success: ' + JSON.stringify(result));
	                res.send(result);
	                // res.send(result[0]);
	            }
	        });
	    });

  });
  //res.send('Added:  ' + user);
});

module.exports = router;


