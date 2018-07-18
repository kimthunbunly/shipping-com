const entity = require ('../globle/modelObject');
const asyncForEach = require('../globle/asyncForEach');

module.exports = {
  trip : async function (trip) {
    await asyncForEach (trip.services , async (service) => {
      const promise = entity ['trip'].find ({route : trip.route, services : service}).exec();
      await promise.then((docs) => {
        console.log(docs.length);
        if(docs.length === 0) {
          const service_result = entity ['service'].updateOne({_id : service }, {$pull : {routes: trip.route }}).exec();
          const route_result = entity ['route'].updateOne({_id : trip.route }, {$pull : {services: service }}).exec();
          service_result.then(console.log);
          route_result.then(console.log);
        }
      })
      .catch (console.error);
    })
    entity ['service'].updateMany ({}, {$pull : {trips: {tripId: trip._id} }}, (err, updated) => {
      if(err) console.log(err);
      console.log({service : updated});
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
            console.log({serviceTrip : update});
          })
          console.log({removeTrip:result});
        })
      })
    })
    entity ['service'].updateMany ({}, {$pull : { routes :route._id }}, (err, result) => {
      if (err) console.log(err);
      console.log({service : result });
    })
  }
}
