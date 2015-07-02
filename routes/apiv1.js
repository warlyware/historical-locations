var express = require('express');
var router = express.Router();
var Firebase = require('firebase');
var fbRef =  new Firebase('https://historic-locations.firebaseio.com/locations');

var fakeData = [
  {name: 'location', description: 'Location1', year: '1996'},
  {name: 'location', description: 'Location2', year: '1999'},
  {name: 'location', description: 'Location3', year: '1992'},
  {name: 'location', description: 'Location4', year: '1969'},    
]

router.get('/locations', function(req, res) {
  res.json({locations: fakeData});
});

router.post('/locations', function(req, res) {
  fbRef.push(req.body);
  res.json(req.body);
});

module.exports = router;