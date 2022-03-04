var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mydatabase = "DB_Test";
/* query db page. */
Push_data();
Query_LV3();
/* GET home page. */

function Query_LV3(){
    router.get('/', function(req, res, next) {
        res.render('test/lv3');
    
    
    });
}
function Push_data(){
    router.post('/',function(req,res){
        const timestamp = new Date();
 
        const check = req.body.check;
        const result = req.body.result;

        if(check == "Refresh"){
            res.redirect('/test3');
        }
        else{
            myobj = {
                timestamp:timestamp
                ,lv:3
                ,score:result
            } 
            var mycollection = "Ans_Lv3";
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db(mydatabase);  
                dbo.collection(mycollection).insertOne(myobj, function(err, res) {
                    if (err) throw err;
                    db.close();
                });
            });
        }
        res.redirect('/test4');
      });
}
module.exports = router;


