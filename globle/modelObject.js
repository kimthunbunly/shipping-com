//model
const entity = {
  route    : require ('../models/route'),
  company  : require ('../models/company'),
  parcel   : require ('../models/parcel'),
  service  : require ('../models/service'),
  trip     : require ('../models/trip'),
  vehicle  : require ('../models/vehicle'),
  shipment : require ('../models/shipment'),
  user     : require ('../models/user'),
  from     : require ('../models/sender'),
  to       : require ('../models/receiver')
}

module.exports = entity;
