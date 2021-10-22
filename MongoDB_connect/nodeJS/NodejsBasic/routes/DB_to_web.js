var express = require('express');
var router = express.Router();

//เรียก module mobogodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydatabase";

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydatabase");  
    var query = { _id:5510};
    dbo.collection("customers").find(query).toArray(function(err, result) {
    console.log("\n###############\n",result,"\n###############\n");
    
      var rt=result[0];
      if (err) throw err;
      
      db.close();
      res.render('DB_to_web', { title: "我们 Database" ,
                                name: rt.name ,
                                id: rt._id , 
                                Address: rt.address , 
                                Picture: rt.pic,
                                email : rt.email
                            });  
      });
  });
});


module.exports = router;