var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "ML";

/* get db page */
router.post('/',function(req,res){
    var id = req.body.id;
    var q = req.body.question;
    var opt1 = req.body.option1;
    var opt2 = req.body.option2;
    var opt3 = req.body.option3;
    var opt4 = req.body.option4;
    var ans = req.body.answer;

   console.log("\n\n############### INSERT ###########\n\n");
   console.log(q);
   console.log(opt1);
   console.log(opt2);
   console.log(opt3);
   console.log(opt4);
   console.log(ans);
   
//   console.log(adrrs);
//   console.log(id);


    var myobj = {
        _id: id,
        question: q,
        option1: opt1,
        option2: opt2,
        option3: opt3,
        option4: opt4,
        answer: ans
    };
    var mycollection = "rule_based";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);  
        dbo.collection(mycollection).insertOne(myobj, function(err, res) {
            if (err) throw err;
 //           console.log("\n\n1 document inserted\n\n");
            db.close();
        });
    });
    //res.location('/');
    res.redirect('/');
});



var mycollection = "rule_based";

/* query db page. */
router.get('/', function(req, res, next) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var query = { name:/.*m*/};
    dbo.collection(mycollection).find(query).toArray(function(err, result) {
        if (err) throw err;
        var dataResult = result[2];
        console.log("\n\n############### Query ###########\n\n");
        console.log(result);
        console.log("##########################");
        db.close();
        res.render('db', 
            {
                title:"Web to DB"
                ,db_date: dataResult.phone
                ,db_name: dataResult.name
                ,db_age: dataResult.age
                ,db_pic: dataResult.pic
            });
        });
     });

});

module.exports = router;
