var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Temperature Converter' });
});

router.post('/temperature', function(req, res) {
  if (req.body.tempType === 'cel') {
    var cel = req.body.degrees;
    var far = cel * 9/5 + 32;
    res.send('Converted temperature = ' + far);
  } else {
    var far = req.params.temp;
    var cel = (far - 32) * 5/9;
    res.send('Converted temperature = ' + cel);
  }
});

module.exports = router;
