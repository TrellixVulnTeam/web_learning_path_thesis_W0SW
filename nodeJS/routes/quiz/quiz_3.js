var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test/Quiz_LV3/Quiz3');
});

module.exports = router;
