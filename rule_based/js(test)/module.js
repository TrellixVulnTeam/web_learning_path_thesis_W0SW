/*export class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    // ...
  }
  
export class Rabbit extends Animal {
  
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
    // ...
  }*/

export class queryDatabase {

    constructor() {

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var mydatabase = "ML";
    var mycollection = "rule_based";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydatabase);
        var query = { test1:true}; //did test1
        dbo.collection(mycollection).find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            let sum = 0;
            for (let i = 0; i < result.length; i++) {
                sum += result[i].option1;
            }
            return sum;
            db.close();
            });
            
         });
         

    }

    // ...
  }
