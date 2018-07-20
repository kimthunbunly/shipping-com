const router   = require ('express').Router();

//models
const Route    = require ('../models/route'),
      Trip     = require ('../models/trip'),
      Service  = require ('../models/service');

//function
const asyncForEach = require ('../globle/asyncForEach');

//Client : /Phnom Penh/Battambang?volume=30&&weight=12
router.get ('/:from-:to', async (req, res) => {
  try {
    const route = await Route.find ({from : req.params.from , to : req.params.to });

    if (route[0]) {
      let query = [{'trips.tripId' : {$in : route[0].trips}}];
      let condition = [{$in : ["$$trip.tripId", route[0].trips]}];

      if (req.query.volume) {
        query.push({"trips.totalVolume": {$gte : parseInt(req.query.volume)}});
        condition.push({$gte : ["$$trip.totalVolume", parseInt(req.query.volume)]});
      }
      if (req.query.weight) {
        query.push({"trips.totalWeight": {$gte : parseInt(req.query.weight)}});
        condition.push({$gte : ["$$trip.totalWeight", parseInt(req.query.weight)]});
      }

      switch (req.query.type) {
        case 'dropOff':
          query.push({ "type.dropOff" : true });
          break;
          case 'doorToDoor':
            query.push({ "type.doorToDoor" : true });
            break;
        default:
      }

      const lookupCompany = new Lookup ('companies', 'company','_id','company');
      const lookupTrip    = new Lookup ('trips', 'trips.tripId', '_id', 'ref_trip');
      const lookupVehicle = new Lookup ('vehicles', 'vehicles', '_id', 'vehicles');

      const tripFilter =  {
        $filter : {
          input : "$trips",
          as : "trip",
          cond : {$and : condition}
        }
      }
      const ref_tripFilter = {
        $filter : {
          input : '$ref_trip',
          as : 'ref_trip',
          cond : {$eq : ["$$ref_trip.route", route[0]._id]}
        }
      };

      const projection = {
        trips : tripFilter,
        ref_trip :ref_tripFilter,
        ref_trip : {departTime:1,eta : 1,  _id:1},
        vehicles : { type : 1 },
        company : { name:1, address:1},
        type : 1,
        category : 1,
        price:1
      };

      // Process
      Service.aggregate([
          {$lookup : lookupCompany},
          {$unwind : '$company'},
          {$lookup : lookupVehicle},
          {$lookup : lookupTrip},
          {$match : {$and : query}},
          {$project : projection}
      ]).exec((err, result) => {
        if(err) console.error(err);
        res.json(result);
      })
    } else {
      res.status(404).json('Route isn\'t existed!');
    }
  } catch(ex) {
    res.status(500).json(ex);
  }
})

function Lookup (from, localField, foreignField, as) {
  this.from = from,
  this.localField = localField,
  this.foreignField = foreignField,
  this.as = as
}

module.exports = router;
