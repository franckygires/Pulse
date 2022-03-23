const express = require('express');
const router = express.Router();

// controllers

const ParkingCtrl = require('../Controllers/parking.controller')
 



// create parking
router.post('/', ParkingCtrl.createParking);

// get one parking by id
router.get('/:id', ParkingCtrl.getById);

// get parking by user
// router.get("/user/:id", ParkingCtrl.getByUserId);

// delete parking
router.delete('/:id',ParkingCtrl.deleteParking);

// update parking
router.put('/:id', ParkingCtrl.updateParking);

// get all parking
router.get('/',ParkingCtrl.getAllParking);

module.exports = router;
