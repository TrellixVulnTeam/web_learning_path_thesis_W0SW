var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test/TestMiniproject/main');
});

module.exports = router;
