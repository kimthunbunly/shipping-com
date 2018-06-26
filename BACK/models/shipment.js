const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

/*const paymentSchema = new Schema ({
  method     : { type : String , required : true , trim : true },
  cardNumber : { type : String , required : true , trim : true },
  expireDate : { type : Date   , required : true },
  secureCode : { type : String , required : true , trim : true }
});*/

const shipmentSchema = new Schema ( {
  route    : { type : Schema.Types.ObjectId , required : true , ref: 'Route' },
  nParcel  : { type : Number , required : true },
  parcels  : [{
    type : Schema.Types.ObjectId ,
    ref : 'Parcel',
    required : true
  }],
  status : { type : String , trim : true } ,
  chosenService : { type : Schema.Types.ObjectId , ref : 'Service' },
  parcelDetail   : {
    reason  : { type : String , trim : true },
    content : { type : String , trim : true }
  },
  fromDetail : { type : Schema.Types.ObjectId , ref : 'fromDetail' },
  toDetail   : { type : Schema.Types.ObjectId , ref : 'toDetail' },
  //payment : { type : paymentSchema },
  description : { type : String },
  created : { type : Date , default : Date.now }
});

module.exports = mongoose.model ('Shipment' , shipmentSchema );
