

const { url } = require('inspector');

const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({

  // nom du parking
  username: { type: String, required: true},

  // date et heure de la réservation
  date: {type: String, required: true},

  // l'user id
  userId:{type: mongoose.Schema.Types.ObjectId, ref:"User"},

  // l'id du parking
  parkingId: {type: mongoose.Schema.Types.ObjectId, ref:"Parking"}
},
{
  timestamps : true
});

module.exports =  mongoose.model('Reservation', ReservationSchema);
