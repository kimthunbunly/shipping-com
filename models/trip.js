const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const Route = require('./route');
const asyncForEach = require('../globle/asyncForEach');
const ETA = require('./functions/ETA');

const tripSchema = new Schema ( {
  departTime : {
    type : Date ,
    required : true
  },
  eta : {
    type : Date ,
    required : true
  },
  route: {
    type : Schema.Types.ObjectId ,
    required : true ,
    ref : 'Route'
  },
  services : [{
    type : Schema.Types.ObjectId ,
    required : true ,
    ref : 'Service'
  }],
  description : String,
  created : { type : Date, default : Date.now }
});

tripSchema.index ( {departTime: 1, route : 1} , {unique : true} );

tripSchema.pre ('findOne' , function () {
  this.populate ({
    path : 'services',
    populate : {
      path : 'company',
      select : 'name -_id'
    },
    select : 'category -_id'
  }).populate('route' , 'from to -_id');
});

tripSchema.pre('save', true , function (next, done) {
  this.eta = new Date(this.departTime.toString());
  Route.findById( this.route, (err, route) => {
    ETA (this.eta , route.duration);
    next();
  });
  setTimeout(done, 100);
});

tripSchema.post ('save' , function (doc) {
  console.log(doc.route);
  Route.updateOne({ _id : doc.route }, {$push : {trips : doc._id }}, (err, route) => {
    console.log(route);
  });
});

tripSchema.pre ('insertMany' , async function ( next, docs) {
  await asyncForEach(docs , async (doc) => {
    doc.eta = new Date(doc.departTime.toString());
    const promise = Route.find({_id : doc.route}).exec();
    await promise.then((routes) => {
      ETA (doc.eta , routes[0].duration);
    })
    .catch (console.error);
  })
  next();
});

tripSchema.post ('remove' , function (doc) {
  Route.updateOne({ _id : doc.route }, {$pull : {trips : doc._id }}, (err, route) => {
    console.log (route);
  });
});

module.exports  = mongoose.model ('Trip' , tripSchema );
