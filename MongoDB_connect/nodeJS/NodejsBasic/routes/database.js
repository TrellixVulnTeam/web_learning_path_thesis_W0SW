var express = require('express');
var router = express.Router();

//var mongo = require('mongodb'); //เรียก module mobogodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydatabase";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('THIS IS USERS');
      db.close();
});

module.exports = router;