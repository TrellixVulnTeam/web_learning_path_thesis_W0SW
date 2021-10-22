var express = require('express');
var router = express.Router();

//เรียก module mobogodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydatabase";

/* GET users listing. */
router.get('/', function(req, res, next) {

    res.render('web_to_DB', { title: "他们 Database" 
                            });  
});

router.post('/',function(req,res,next){
  var fistname = req.body.fname;
  var lasttname = req.body.lname;
  var adrrs = req.body.addr;
  console.log(fistname);
  console.log(lasttname);
  console.log(adrrs);

  var myobj = {name:fistname+" "+lasttname,
    address:adrrs};
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydatabase");  
  
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("\n\n1 document inserted\n\n");
    db.close();
    });
  });

});




module.exports = router;