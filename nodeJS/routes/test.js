var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "DB_Test";
/* query db page. */

Query_LV1();
Push_data();
module.exports = router;

function Query_LV1(){
    router.get('/', function(req, res, next) { 
        var mycollection = "Ans_Lv1";
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(mydatabase);
            var query = { test_lv:"1"};
            dbo.collection(mycollection).find(query).toArray(function(err, result) {
                if (err) throw err;
                let did_ans = result.length;
                db.close();

                var mycollection = "Content_Lv1";
                MongoClient.connect(url, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db(mydatabase);
                    var query = { question:/.*m*/};
                    dbo.collection(mycollection).find(query).toArray(function(err, result) {
                        if (err) throw err;  
                        let totol_ans = result.length;
                        let number = result[did_ans];
                        if((did_ans) == totol_ans){
                            db.close();res.redirect('/home');
                        }
                        else{
                            let question1 = number.question;
                            let Q1A1 = number.opt1;
                            let Q1A2 = number.opt2;
                            let Q1A3 = number.opt3;
                            let Q1R =  number.ans;
                            let no =  number.no;
                            let level = number.lv;
                            let pic = number.pic;
                            db.close();
                            res.render('test/lv1', 
                                {
                                question:question1,
                                pic:pic,
                                ans1:Q1A1,
                                ans2:Q1A2,
                                ans3:Q1A3,
                                ansR:Q1R,
                                test_lv:level,
                                no:no
                                });
                        }
                    });
                });
            });
        });
    });
}


function Push_data(){

    router.post('/',function(req,res){
        const timestamp = new Date();
        var ans = req.body.ans;
        var ansR = req.body.ansR;
        var test_lv = req.body.test_lv;
        var no = req.body.no;    
        var user = "Student1";
console.log("\t\t\n ###### \n")
        
        console.log(ans);
        console.log(ansR);

console.log("\t\t\n ********* \n")

        if (ans === ansR){
            myobj = {
                timestamp:timestamp,
                user:user,
                score:1,
                test_lv:test_lv
                ,no:no
            }
        }
      
        else {
            myobj = {
            timestamp:timestamp,
            user:user,
            score:0,
            test_lv:test_lv
            ,no:no
            }       
        }

        var mycollection = "Ans_Lv1";
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydatabase);  
          dbo.collection(mycollection).insertOne(myobj, function(err, res) {
              if (err) throw err;
              db.close();
          });
      });
      
        res.redirect('/test');
      });
}
