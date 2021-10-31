var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


router.get('/', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("thesisDB");
    dbo.collection("movie").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
        res.render('db', { title: "我们 Database" 
                            ,name: result.name 
                        });  
    });
    });
});

module.exports = router;