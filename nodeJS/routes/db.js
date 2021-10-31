var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.get('/', function(req, res, next) {

    res.render('db', { title: "我们 Database" 
    //                        ,name: result.name 
    ,name: "CONNECTED" 
                        });  
});
module.exports = router;