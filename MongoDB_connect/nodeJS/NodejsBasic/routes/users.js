var express = require('express');
var router = express.Router();

//var mongo = require('mongodb'); //เรียก module mobogodb
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydatabase";

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('THIS IS USERS');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydatabase");
  // var query = { address: "Park Lane 39" };
    var query = ({address: "Highway 39" });
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      //console.log(result);
      res.send(result);
      db.close();
    });
  });

});

module.exports = router;
/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydatabase");
   // var query = { address: "Park Lane 39" };
    var query = ({address: "Highway 39" });
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
  
*/
  //var query = { name: "ถึงจาก google ที่ user login" };
  //.sort(mysort) ใช้เวลาจัด ranking
  //.limit(5) เลือกแค่ 5 อันดับ





/*
const monk = require('monk')

// Connection URL
const url = 'localhost:27017/NEWSIX_Database';

const db = monk(url);



db.then((db) => {
  // db is the connected instance of the Manager
  console.log('Connected correctly to server')
}).catch((err) => {
  // error connecting to the database
})


//start process 
/*

db.then(() => {
  console.log('Connected correctly to server')
})

const collection = db.get('Database')


collection.insert([{a: 1}, {a: 2}, {a: 3}])
  .then((docs) => {
    // Inserted 3 documents into the document collection
  })
  .then(() => collection.update({ a: 2 }, { $set: { b: 1 } }))
  .then((result) => {
    // Updated the document with the field a equal to 2
  })
  .then(() => collection.remove({ a: 3}))
  .then((result) => {
    // Deleted the document with the field a equal to 3
  })
  .then(() => {

    return collection.find()

  })
  .then((docs) => {
    // docs === [{ a: 1 }, { a: 2, b: 1 }]
  })
  .then(() => db.close())

  users.aggregate([
  { $project : {
    author : 1,
    tags : 1
  }},
  { $unwind : "$tags" },
  { $group : {
    _id : {tags : "$tags"},
    authors : { $addToSet : "$author" }
  }}
]).then((res) => {})

*/