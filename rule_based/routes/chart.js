var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "ML";


var mycollection = "rule_based";

/* query db page. */
router.get('/', function(req, res, next) {
    res.render('chart', 
            {
 //               title:"Web to DB"
  //              ,db_cal:"S"
            });
        });
/*
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    //var query = { test1:true}; //did test1
    var query = { test1:5};
    dbo.collection(mycollection).find(query).toArray(function(err, result) {
        if (err) throw err;
     //   console.log(result);
        let sum = sumFunction(result);
    //    newFunction(sum);
        db.close();

        res.render('chart', 
            {
                title:"Web to DB"
                ,db_cal: sum
            });
        });
     });
});
*/


module.exports = router;

