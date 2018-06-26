const mongoose = require ('mongoose');
const Schema  = mongoose.Schema;
const Vehicle = require ('./vehicle');
const typeSchema = {
  dropOff       : { type : Boolean , required : true , default : false },
  doorToDoor    : { type : Boolean , required : true , default : false },
  economy       : { type : Boolean , required : true , default : false },
  timedDelivery : { type : Boolean , required : true , default : false }
};

const serviceSchema = new Schema ( {
  company : {
    type : Schema.Types.ObjectId ,
    required : true ,
    ref : 'Company'
  },
  vehicles : [{
    type : Schema.Types.ObjectId ,
    required : true ,
    ref : 'Vehicle'
  }],
  type     : typeSchema , //delivery at collection point, door-to-door
  category : { type : String , required : true , trim : true }, //Express, Standard, or our exclusive Urgent Courier Service
  price    : { type : Number },
  collectDate    : { type : Date },
  deliveryDate   : { type : Date },
  parcelVolumeMax : { type : Number , default : 30 },
  totalVolume : { type : Number },
  parcelWeightMax: { type : Number , default : 15 },
  totalWeight : { type : Number },
  description : String ,
  status : String ,
  routes : [{
    type : Schema.Types.ObjectId ,
    required : true ,
    ref : 'Route'
  }],
  created   : { type : Date , default : Date.now }
});

serviceSchema.index ({ company : 1, category : 1 }, { unique : true });

module.exports  = mongoose.model ('Service' , serviceSchema );
