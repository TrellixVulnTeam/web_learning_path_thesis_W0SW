var express = require('express');
var router = express.Router();
const store = require("store2");
/**
Require compilex
 */
var compiler = require('compilex');
var options = {stats : true}; //prints stats on console 
compiler.init(options);


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('compiler', { title: 'EX Online IDE' ,Resulte:store('compiler')});
});



router.post('/', function(req, res, next) { 
    
    var submit = req.body.submit;
    var code = req.body.code;
    var inputRadio = req.body.inputRadio;
    var lang = req.body.lang;

    if (lang === "Python") {
        var envData = { OS: "windows" };
        compiler.compilePython(envData, code, function (data) {
        console.log(ide_storage(data.output));
        });
    }
    //res.redirect(req.get('referer'));
    res.redirect('/ide');
});


//let data2 = "WE ARE YOUNG!"
//console.log(ide_storage(data2));

function ide_storage(data){
    store.clearAll();
    console.log(store.getAll());
    store('compiler', data);
    return store('compiler');
}

module.exports = router;