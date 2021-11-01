var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log("\n\n\n\n##################### STATO #####################");
  res.render('test/Quiz_LV1-2/Quiz1-2',)
 
});


module.exports = router;


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "questions";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(mydatabase);
  var query = { answer:/.*m*/};
  dbo.collection(mycollection).find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});