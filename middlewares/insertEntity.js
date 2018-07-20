const entity = require ('../globle/modelObject');
const asyncForEach = require ('../globle/asyncForEach');

module.exports = {
  service: function (req , res , next) {
    entity['vehicle'].find ({_id: {$in: req.body.vehicles}}, (err, vehicles) => {
      let total = 0;
      vehicles.forEach((v) => {
        total += v.volume;
      });
      if (req.body.trips.length > 0) {
        req.body.trips.forEach ((r) => {
          r.totalVolume = total * 30;
          r.totalWeight = total * 10;
        });
      }
      next();
    });
  },
  shipment: function (req , res , next) {
    const body = req.body;
    entity ['trip'].findById (body.trip , (err, trip) => {
      if (err) console.log(err);
      if (trip) {
        start (body.parcels)
        .then((obj) => {
          updateService (body, obj.totalVolume, obj.totalWeight);
          body.parcels = obj.parcelIds;
          next();
        })
        .catch(console.error);
      } else {
        res.json ('Not existed trip');
      }
    });
  },
  trip : function (req , res , next) {
    entity ['route'].findById(req.body.route, (err, route) => {
      if(err) console.log (err);
      if(route) next();
      else res.json('Not existed route');
    })
  }
}

const start = async (parcels) => {
  let parcelIds = [];
  let totalVolume = 0;
  let totalWeight = 0;
  await asyncForEach (parcels, async (parcel) => {
    const promise = entity ['parcel'].create (parcel);
    await promise.then((parcel) => {
      parcelIds.push (parcel._id);
      totalVolume += parcel.totalVolume;
      totalWeight += parcel.totalWeight;
    })
    .catch (console.error);
  })
  return { parcelIds, totalVolume, totalWeight };
}

function updateService (body ,totalVolume, totalWeight) {
  const filter1 = { _id : body.chosenService  };
  const option = { "trips" : {$elemMatch : { tripId : body.trip }}};

  entity ['service'].findOne (filter1, option, (err, service) => {
    if (err) throw err;
    if (service) {
      const tripLength = service.trips.length;
      if (tripLength === 1) {
        let volume = service.trips[0].get('totalVolume'),
            weight = service.trips[0].get('totalWeight');
        if ( volume >= totalVolume && weight >= totalWeight) {
          const filter2 = {
            _id : body.chosenService,
            "trips.tripId" : body.trip
          }
          const update = {
            $inc : { "trips.$.totalVolume" : -totalVolume , "trips.$.totalWeight" : -totalWeight }
          }
          entity ['service'].updateOne (filter2 , update , (err , updated) => {
            console.log({"SERVICE => decrease space" : updated});
          })
        }
        else {
          console.log('Oop! there is no enough space!');
        }
      }
      else {
        console.log ('Sorry, the chosen service doesn\'t serve for the trip!');
      }
    }
    else {
      console.log('Not existed Service');
    }
  })
}
