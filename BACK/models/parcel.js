const mongoose = require ('mongoose');

const parcelSchema = new mongoose.Schema ({
  qty       : { type : Number , required : true },
  weight    : { type : Number , required : true },
  dimension : {
    length  : { type : Number , required : true },
    width   : { type : Number , required : true },
    height  : { type : Number , required : true },
  },
  volume    : { type : Number , max: 30 },
  price     : { type : Number },
  totalVolume : { type : Number },
  totalWeight : { type : Number },
  description : { type : String },
  created     : { type : Date , default : Date.now }
});

module.exports = mongoose.model ('Parcel' , parcelSchema );
