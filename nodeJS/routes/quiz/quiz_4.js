var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test/Quiz_LV4/Quiz4');
});

module.exports = router;
