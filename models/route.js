const mongoose = require ('mongoose');

const routeSchema = new mongoose.Schema({
  from  : { type : String , required : true , trim : true },
  to    : { type : String , required : true , trim : true },
  price : { type : Number },
  distance : { type : Number },
  duration : { type : Number },
  description : { type : String },
  services : [{
    type: mongoose.Schema.Types.ObjectId,
    required : true,
    ref: 'Service'
  }],
  created     : { type : Date , default : Date.now }
});

routeSchema.index ({ from : 1, to : 1 }, { unique : true });

module.exports = mongoose.model ('Route' , routeSchema );
