const entity = require ('../globle/modelObject');
const asyncForEach = require('../globle/asyncForEach');

module.exports = {
  trip : async function (trip) {
    await asyncForEach (trip.services , async (service) => {
      const promise = entity ['trip'].find ({route : trip.route, services : service}).exec();
      await promise.then((docs) => {

        if(docs.length === 0) {
          const service_result = entity ['service'].updateOne({_id : service }, {$pull : {routes: trip.route }}).exec();
          const route_result = entity ['route'].updateOne({_id : trip.route }, {$pull : {services: service }}).exec();
          service_result.then({service : console.log});
          route_result.then({route : console.log});
        }
      })
      .catch (console.error);
    })
    entity ['service'].updateMany ({}, {$pull : {trips: {tripId: trip._id} }}, (err, updated) => {
      if(err) console.log(err);
      console.log({"SERVICE => pull trip" : updated});
    })
  },
  route : function (route) {
    entity['trip'].find ({route : route._id}, (err, trips) => {
      if(err) console.log(err);
      trips.forEach(trip => {
        trip.remove((err, result) => {
          if (err) console.log(err);
          entity ['service'].updateMany({},{$pull : {trips : {tripId : result._id}}}, (err, update) => {
            if(err) console.log(err);
            console.log({"SERVICE => pull trips" : update});
          })
          console.log({"TRIP => delete": result._id});
        })
      })
    })
    entity ['service'].updateMany ({}, {$pull : { routes :route._id }}, (err, result) => {
      if (err) console.log(err);
      console.log({"SERVICE => pull route id" : result });
    })
  }
}
