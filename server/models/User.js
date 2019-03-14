const mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    name:{type:String,required:true,minlength:2},
    quote:{type:String,required:true,minlength:5}
},{timestamps:true});

const users = mongoose.model('users',userSchema);