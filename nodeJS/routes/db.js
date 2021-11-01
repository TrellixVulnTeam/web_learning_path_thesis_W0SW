var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "movie";



/* get db page */
router.post('/',function(req,res){
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
        var dbo = db.db(mydatabase);  
        dbo.collection(mycollection).insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("\n\n1 document inserted\n\n");
            db.close();
        });
    });
    //res.location('/');
    res.redirect('/db');
    
});


/* query db page. */
router.get('/', function(req, res, next) {

  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydatabase);
      dbo.collection(mycollection).findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
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
