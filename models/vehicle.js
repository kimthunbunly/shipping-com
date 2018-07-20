const mongoose = require ('mongoose');
const Service = require('./service');

const vehicleSchema = new mongoose.Schema ({
  type   : { type : String , required : true , unique : true , trim : true },
  volume : { type : String , required : true },
  description : String,
  created     : { type : Date , default : Date.now }
});

vehicleSchema.post('remove' , function (doc) {
  const update = {
    $pull : {vehicles : doc._id},
    $inc : {
      "trips.$[].totalVolume" : -doc.volume * 30,
      "trips.$[].totalWeight" : -doc.volume * 10
    }
  }
  Service.updateMany({vehicles : doc._id, vehicles : {$nin : [doc._id]}}, update, (err, result) => {
    if (err) console.error(err);
    console.log({"SERVICE => decrease space" : result});
  })
})

module.exports = mongoose.model ('Vehicle' , vehicleSchema );
