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

router.post('/db',function(req,res,next){
    var fistname = req.body.fname;
    var lasttname = req.body.lname;
    var comment = req.body.comment;
    console.log(fistname);
    console.log(lasttname);
    console.log(comment);

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydatabase");
        var myobj = { name:fname+lname,address:comment,email:"exxamls@mail.com",pic:"https://media4.giphy.com/media/3o6wrvdHFbwBrUFenu/200.gif"};
        dbo.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("\n\n1 document inserted\n\n");
          db.close();
        });
      });


});




module.exports = router;