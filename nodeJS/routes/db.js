var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "movie";



/* get db page */
router.post('/db',function(req,res,next){
    var getPAGE = req.body.inputDB;
    console.log(getPAGE);
    next();
    });


/* query db page. */
router.get('/', function(req, res, next) {

  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydatabase);
      dbo.collection(mycollection).findOne({}, function(err, result) {
        if (err) throw err;
        console.log("\n\n########\n\n");
        console.log(result);
        console.log("\n\n########\n\n");
        db.close();
        res.render('db', 
            { title: '你爱我吗？' 
            ,db_name: result.name
            ,db_age: result.age
            });
        });
     });

});

module.exports = router;
