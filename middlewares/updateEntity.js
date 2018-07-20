const entity = require ('../globle/modelObject');

module.exports = {
  service : async function (req, callback) {
    const vehicles = await entity['vehicle'].find({_id : req.body.vehicle});
    const filter = {_id : req.params.id};
    let update = undefined;

    if (req.params.method === 'add') {
      update = {
        $push : {vehicles : vehicles[0]._id},
        $inc : {
          "trips.$[].totalVolume" : vehicles[0].volume * 30,
          "trips.$[].totalWeight" : vehicles[0].volume * 10
        }
      }
    } else if (req.params.method === 'remove') {
      filter["vehicles"] = req.body.vehicle;
      update = {
        $pull : {vehicles : vehicles[0]._id},
        $inc : {
          "trips.$[].totalVolume" : -vehicles[0].volume * 30,
          "trips.$[].totalWeight" : -vehicles[0].volume * 10
        }
      }
    }
    entity['service'].findOneAndUpdate( filter, update, (err, doc) => {
      if (err)  console.error(err);
      callback(doc);
    })
  },
  route :  async function (req, callback) {
    const route = await entity['route'].findByIdAndUpdate(req.params.id, {duration : req.body.duration});
    const trips = await entity['trip'].find({route : req.params.id});

    trips.forEach (trip => {
      trip.set({route : route._id});
      trip.save((err) => {
        if(err) console.error(err);
      })
    })
    callback(route);
  },
  trip : async function (req, callback) {
    const trips = await entity['trip'].find ({_id : req.params.id});

    trips[0].set({departTime : req.body.departTime});
    trips[0].save((err, updateTrip) => {
      if(err) console.error(err);
      callback(updateTrip);
    })
  }
}
