var mongo = require('mongodb'); //เรียก module mobogodb

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydatabase";



/* Create DB&Collection*/
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database Connected");
  var dbo = db.db("mydb");          //Database create
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!"); //Collection create
    db.close();
  });
});
*/
/* Find *//*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydatabase");
    //Find the first document in the customers collection:
    dbo.collection("customers").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      db.close();
    });
  });
  
*/
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydatabase");
   // var query = { address: "Park Lane 39" };
    var query = ({address: "Highway 39" });
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      res.writeHead(200,{'Content-Type';'text/plaint'})
      console.log(result);
      db.close();
    });
  });


