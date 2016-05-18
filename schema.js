var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
      name:{type:String,required:true,unique:true},
      idstud:  {type:Number, required:true, unique:true},
      grade: {type:Number,required:true},
      year:{type:Number,required:true},
      coures:{type:String,required:true}
  },  {collection: 'json'});


var User= mongoose.model('User',userSchema);
module.exports=User;