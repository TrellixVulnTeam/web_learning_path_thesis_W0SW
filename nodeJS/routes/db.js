var express = require('express');
var router = express.Router();

//เรียก module mobogodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/thesisDB";

/* GET users listing. */
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("thesisDB");  
      var query = { a:12323};
      dbo.collection("movie").find(query).toArray(function(err, result) {
      //console.log("\n###############\n",result,"\n###############\n");
      
        var rt=result[1];
        if (err) throw err;
        //var rt = {"name":"India"};
        db.close();
        res.render('db', { title: "我们 Database" 
                            ,name: rt.name 
                        });  
        });
    });
  });
  
  
  module.exports = router;