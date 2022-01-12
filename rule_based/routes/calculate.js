var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "ML";

/* get db page */
router.post('/',function(req,res){
    var p1 = req.body.option1;
    var p2 = req.body.option2;
    var opt1 = parseFloat(p1);
    var opt2 = parseFloat(p2);

   console.log("\n\n############### INSERT ###########\n\n");
  
//   console.log(adrrs);
//   console.log(id);



    var myobj = {
        test1:true,
        option1: opt1,
        option2: opt2,
    };
    var mycollection = "rule_based";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);  
        dbo.collection(mycollection).insertOne(myobj, function(err, res) {
            if (err) throw err;
            db.close();
        });
    });
    //res.location('/');
    res.redirect('/cal');
});


var mycollection = "rule_based";

/* query db page. */
router.get('/', function(req, res, next) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var query = { test1:true}; //did test1
    dbo.collection(mycollection).find(query).toArray(function(err, result) {
        if (err) throw err;
        
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += result[i].option1;
        }
        newFunction(sum);
                

     //   console.log("\n\n############### Query ###########\n\n");
      //  console.log(result);
     //   console.log("##########################");
        db.close();
        res.render('cal', 
            {
                title:"Web to DB"
                ,db_cal: sum
            });
        });
     });
});

module.exports = router;


function newFunction(sum) {
    console.log("\n################\n");
    console.log("\t",sum);
    console.log("\n################\n");
}

