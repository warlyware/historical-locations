var express = require('express');
var router = express.Router();
var Firebase = require('firebase');
var fbRef =  new Firebase('https://historic-locations.firebaseio.com/locations');
var _ = require('lodash');

router.get('/locations', function(req, res) {
  fbRef.once('value', function(snap) {
    res.json({locations: snap.val()});
  });
});

router.post('/locations', function(req, res) {
  var newLocation = _.pick(req.body, ['name', 'description', 'year']);
  if (newLocation.name) {
    fbRef.push(newLocation, function() {
      res.json(newLocation);
    });
  }
  res.status(404);
});

module.exports = router;