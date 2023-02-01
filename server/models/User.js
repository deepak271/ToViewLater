const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;

const userSchema = new Schema({
 name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true,
    unique:true
 },
 password:{
    type:String
 },
 date: { type: Date, default: new Date() }
  }
);
const user = mongoose.model('user',userSchema);
module.exports = user;