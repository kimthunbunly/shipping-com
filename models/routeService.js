const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const routeServiceSchema = new Schema ({
  route : {
    type : Schema.Types.ObjectId ,
    required : true ,
    ref : 'Route'
  },
  service : {
    type: mongoose.Schema.Types.ObjectId ,
    required : true,
    ref: 'Service'
  },
  description : String
});

routeServiceSchema.index ({ route : 1, service : 1 }, { unique : true });

module.exports  = mongoose.model ('RouteService' , routeServiceSchema );
