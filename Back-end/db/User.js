const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
   Name:{
      type: String
   },
   Email:{
      type: String
   },
   Password:{
      type: String
   } 
});

module.exports = mongoose.model("User",UserSchema);