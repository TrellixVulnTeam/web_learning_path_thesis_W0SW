/*import { Animal,Rabbit } from './module.js';


  // now fine
  let rabbit = new Rabbit();
  rabbit.name = "Sge"
  rabbit.earLength = 123;
  let x1 = rabbit.earLength;
  
  rabbit.earLength = 55;
  let x2 = rabbit.earLength;
  
  
  console.log(x1);
  console.log(x2);
  console.log(rabbit.name);




import {queryDatabase } from './module.js';

//let a = constructor();
console.log(constructor);*/

class queryDatabase {

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
              //queryDatabase.meow(sum);
          }
          
          //return sum;
          db.close();
          });
       });
  }
  meow(sum){
    let a = sum;
    console.log(a);
    
  }

  // ...
}
const constructorFromClass = new queryDatabase();
//queryDatabase.meow();