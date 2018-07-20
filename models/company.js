const mongoose = require ('mongoose');
require('mongoose-type-email');
const Service = require('./service');

const companySchema = new mongoose.Schema ( {
  name : {
    type : String ,
    required : true ,
    unique : true
  },
  logo : {
    type : String ,
    required : true
  },
  address : {
    type : String ,
    required : true
  },
  contact : [{
    type : String ,
    required : [ true, 'Company phone number required' ] ,
    unique : true ,
    default: undefined ,
    trim : true ,
    minlength : 9 ,
    maxlength : 13 ,
    validate : {
      validator : function (v) {
        return /\d{9}/.test(v);
      },
      message : '{VALUE} is not a valid phone number!'
    }
  }],
  email : {type : mongoose.SchemaTypes.Email },
  website     : String ,
  rate        : Number ,
  description : String ,
  created     : { type : Date , default : Date.now }
});

companySchema.post('remove' , function (doc) {
  Service.find({company : doc._id} , function (err, docs) {
    if(err) console.error(err);
    docs.forEach(doc => {
      doc.remove((err, result) => {
        if (err) console.error(err);
        console.log({"SERVICE => remove" : result._id});
      })
    })
  })
})

module.exports = mongoose.model ('Company' , companySchema );
