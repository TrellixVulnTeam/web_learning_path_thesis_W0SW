var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

//import fetch from 'node-fetch';
const courses = [
    {id:1,name:"c1"},
    {id:2,name:"c2"},
    {id:3,name:"c3"},
  ];


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('api/:id', 
        {
            home:courses[1].name
            
        });
});

const covid = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces';

const user = 'https://reqres.in/api/users2'

module.exports = router;
console.log("\n\n*********\n")
const a = [] ;
fetch(covid)
.then((res) => res.json())

.then((res) => console.log(res[1].province));
