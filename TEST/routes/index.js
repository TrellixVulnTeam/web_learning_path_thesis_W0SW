var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "ML";



/* query db page. */

router.get('/', function(req, res, next) {
 
  var mycollection = "ans";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var query = { do:true};
    dbo.collection(mycollection).find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log("####### : ",result);
        let did_ans = result.length;
        db.close();
        

  var mycollection = "rule_based";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);
    var query = { testLv:1};
    dbo.collection(mycollection).find(query).toArray(function(err, result) {
        if (err) throw err;
        //let sum = sumFunction(result);
        let totol_ans = result.length;
        let left_ans = totol_ans-did_ans;

        let number = result[left_ans-1];

        if(left_ans==1){res.redirect('/users');}

        console.log("\n did_ans :",did_ans,"\n");
        console.log("\n totol_ans :",totol_ans,"\n");
        console.log("\n :left_ans ",left_ans,"\n");
        console.log("\n\n",number.no,"\n\n");
        

        let question1 = number.question;
        let Q1A1 = number.ans1;
        let Q1A2 = number.ans2;
        let Q1A3 = number.ans3;
        let Q1R =  number.ansR;
        db.close();
        res.render('index', 
            {
              question:question1,
              ans1:Q1A1,
              ans2:Q1A2,
              ans3:Q1A3,
              ansR:Q1R
            });
        });
     });
    });
  });

});

/* get db page */
router.post('/',function(req,res){
  const timestamp = new Date();
  
  var question = req.body.question;
  var ans = req.body.ans;
  var ansR = req.body.ansR;


var user = "Student1";
  

if (ans === ansR){
  myobj = {
    timestamp:timestamp,
    user:user,
    question:question,
    ans:ans,
    ansR:ansR,
    score:1,
    do:true
  }
  var mycollection = "ans";
}

else {
  myobj = {
    timestamp:timestamp,
    user:user,
    question:question,
    ans:ans,
    ansR:ansR,
    score:0,
    do:true
  }
  var mycollection = "ans";
}

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(mydatabase);  
    dbo.collection(mycollection).insertOne(myobj, function(err, res) {
        if (err) throw err;
        db.close();
    });
});

  res.redirect('/');
});



module.exports = router;



function sumFunction(result) {

  let sum = 0;
      for (let i = 0; i < result.length; i++) {
          sum += result[i].test1;
      }
return sum;
}


