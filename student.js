var express=require('express');
var app=express();
var fs=require('fs');
var mongoose = require('mongoose');
var User = require('./schema.js');

//return all students in json
module.exports = function(app) {

     app.get('/',function(req,res){
        res.json('connect');
    })

   app.get('/getAllStudent', function(req,res) {
    User.find({},function(err,user){
            if(err) throw err;
            res.json(user);
        });
    })

   //return all students according to id in json
 app.get('/getStudGrade/:id', function(req, res) {
              var idStud1=req.params.id;
              User.find({idstud : idStud1},function(err,user){
                if(err) throw err;
                res.json(user);
        });
    })
   
//return all Excellence students By Year in json
  app.get('/getExcellenceByYear/:year', function(req, res) {
            var yearStud=req.params.year;
            User.find({year: yearStud}).where('grade').gt(89).exec(function(err,user){
                if(err) throw err;
                res.json(user);
        });
    })
  };
 mongoose.disconnect();