const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const Route = require('./route');

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
  description : {
    type : String
  }
});

tripSchema.index ( {departTime: 1,route : 1} , {unique : true} );

tripSchema.pre('save', true , function(next, done) {
  this.eta = Date.now; console.log(this);
  Route.findById( this.route, (err, route) => {
    this.eta.setHours(this.departTime.getHours() + route.duration);
  });
  next();
  setTimeout(done, 100);
})
module.exports  = mongoose.model ('Trip' , tripSchema );
