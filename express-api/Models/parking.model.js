const { url } = require('inspector');

const mongoose = require('mongoose');

const ParkingSchema = mongoose.Schema({

  // nom du parking
  name: { type: String, required: true},

  // une description 
  description: { type: String},

  // l'emplacement du parking
  location: { type: String, required: true},

  // nombre de place disponible
  space: { type: String},
  //userId:{type: mongoose.Schema.Types.ObjectId, ref:"User"}
},
{
  timestamps : true
});

module.exports = mongoose.model('Parking', ParkingSchema);
