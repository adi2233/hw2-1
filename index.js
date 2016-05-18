var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var student=require('./student');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds023418.mlab.com:23418/students');

//open connection to mlab
mongoose.connection.once('open',function(){
    student(app);
    console.log('seccess'); 
});

app.listen(port);
console.log('listening on port'+port);
