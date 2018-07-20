const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const Parcel   = require ('./parcel');
const Service  = require ('./service');

const asyncForEach = require('../globle/asyncForEach');

/*const paymentSchema = new Schema ({
  method     : { type : String , required : true , trim : true },
  cardNumber : { type : String , required : true , trim : true },
  expireDate : { type : Date   , required : true },
  secureCode : { type : String , required : true , trim : true }
});*/

const shipmentSchema = new Schema ( {
  trip    : { type : Schema.Types.ObjectId , required : true , ref: 'Trip' },
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
  sender : { type : Schema.Types.ObjectId , ref : 'Sender', required : true},
  receiver : { type : Schema.Types.ObjectId , ref : 'Receiver', required : true},
  //payment : { type : paymentSchema },
  description : { type : String },
  created : { type : Date , default : Date.now }
});

shipmentSchema.pre ('findOne' , function () {
  this.populate ('parcels', 'dimension weight qty');
  this.populate ({
    path : 'trip' ,
    populate : {path : 'route', select : 'from to -_id'},
    select : 'route eta departTime -_id'
  });
  this.populate ('sender');
  this.populate ('receiver');
  this.populate ({
    path : 'chosenService',
    populate : {path : 'company' , select : 'name address -_id'},
    select : 'price category -_id'
  });
});

const start = async (parcels) => {
  let totalVolume = 0;
  let totalWeight = 0;
  await asyncForEach (parcels, async (parcel) => {
    const promise = Parcel.findByIdAndDelete (parcel).exec();
    await promise.then((parcel) => {
      totalVolume += parcel.totalVolume;
      totalWeight += parcel.totalWeight;
    })
    .catch (console.error);
  })
  return { totalVolume, totalWeight };
}

shipmentSchema.post('remove' , function (doc) {
  start (doc.parcels)
  .then (obj => {
    const filter = {
      _id : doc.chosenService,
      "trips.tripId" : doc.trip
    }
    const update = {
      $inc : {
        "trips.$.totalVolume" : obj.totalVolume ,
        "trips.$.totalWeight" : obj.totalWeight
      }
    }
    Service.update (filter, update, (err, updateInfo) => {
      if (err) throw err;
      console.log({"SERVICE => increase space" : updateInfo });
    })
  })
});

module.exports = mongoose.model ('Shipment' , shipmentSchema );
