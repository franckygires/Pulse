const express = require('express');
const router = express.Router();

// controllers

const ReservationCtrl = require('../Controllers/reservation.controller')
 



// create Reservation
router.post('/', ReservationCtrl.createReservation);

// get one Reservation by id
router.get('/:id', ReservationCtrl.getById);

// get Reservation by user
router.get("/user/:id", ReservationCtrl.getByUserId);

//  get Reservation by parking
router.get('/parking/:id', ReservationCtrl.getByParkingId);

// delete Reservation
router.delete('/:id',ReservationCtrl.deleteReservation);

// update Reservation
router.put('/:id', ReservationCtrl.updateReservation);

// get all Reservation
router.get('/',ReservationCtrl.getAllReservation);

module.exports = router;
