var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var mydatabase = "thesisDB";
var mycollection = "question";



/* get db page */
router.post('/',function(req,res){
    var id = req.body.id;
    var q = req.body.question;
    var opt1 = req.body.option1;
    var opt2 = req.body.option2;
    var opt3 = req.body.option3;
    var opt4 = req.body.option4;
    var ans = req.body.answer;

   console.log(q);
   console.log(opt1);
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
    res.redirect('/db');

});



var mycollection = "movie";

/* query db page. */
router.get('/', function(req, res, next) {

  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(mydatabase);
      dbo.collection(mycollection).findOne({}, function(err, result) {
        if (err) throw err;
 //       console.log(result);
        db.close();
        res.render('db', 
            {
                title:"Web to DB"
             ,date: '1995年6月17日出生于四川省成都市' 
            ,db_name: result.name
            ,db_age: result.age
            });
        });
     });

});

module.exports = router;
