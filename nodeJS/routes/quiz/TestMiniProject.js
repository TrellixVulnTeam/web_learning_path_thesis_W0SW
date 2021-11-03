var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test\TestMiniProject\Main.ejs');
});

router.post('/',function(req,res){
  console.log("get data from miniproject success!")
  res.redirect('/project');
});

module.exports = router;
