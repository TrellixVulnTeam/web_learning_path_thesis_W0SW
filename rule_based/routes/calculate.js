var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "ML";

/* get db page */
router.post('/',function(req,res){
    var option = req.body.opt1;
    let ans = parseFloat(req.body.ans1);
    var view = req.body.view;
   // var opt3 = Boolean(p3);
 
    if(option == "test1"&& view != null){
        var myobj = {
            test1:ans
            ,view:view
        }
    }
    if(option == "test2" && view != null ){
        var myobj = {
            test2:ans
            ,view:view
        }
    }

    if(view == null ){
        var myobj = {
        }
    }


   console.log("\n\n############### INSERT ###########\n\n");

    
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
    //var query = { test1:true}; //did test1
    var query = { test1:5};
    dbo.collection(mycollection).find(query).toArray(function(err, result) {
        if (err) throw err;
     //   console.log(result);
        let sum = sumFunction(result);
    //    newFunction(sum);
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

function sumFunction(result) {

    let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += result[i].test1;
        }
  return sum;
}
