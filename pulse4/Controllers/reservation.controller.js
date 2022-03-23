const Reservation = require("../Models/reservation.model");

exports.createReservation = (req, res, next) => {
  console.log(req.body);

  const reservation = new Reservation({
    ...req.body,
  });
  reservation
    .save()
    .then(() => res.status(201).json({ message: "Reservation registered" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getById = (req, res, next) => {
  Reservation.findOne({ _id: req.params.id })
    .then((reservation) => res.status(200).json(reservation))
    .catch((error) => res.status(400).json({ error }));
};

exports.getByUserId = (req, res, next) => {
  Reservation.find({ userId: req.params.id })
    .then((reservations) => res.status(200).json(reservations))
    .catch((error) => res.status(400).json({ error }));
};

exports.getByParkingId = (req, res, next) => {
    Reservation.find({ parkingId: req.params.id })
      .then((reservations) => res.status(200).json(reservations))
      .catch((error) => res.status(400).json({ error }));
  };

exports.getAllReservation = (req, res, next) => {
  Reservation.find()
    .then((reservations) => res.status(200).json(reservations))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteReservation = (req, res, next) => {
  // return res.json(req.params.id);
  Reservation.findOne({ _id: req.params.id }).then((reservation) => {
    // return res.json(reservation);
    if (!reservation) {
      res.status(404).json({
        error: new Error("No such Reservation!"),
      });
    }
    else {
      Reservation.deleteOne({ _id: req.params.id })
        .then(() => {
          res.status(200).json({
            message: "Deleted!",
          });
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    }
  });
};

exports.updateReservation = (req, res, next) => {
  Reservation.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(201).json({ message: "Reservation updated" }))
    .catch((error) => res.status(400).json({ error }));
};
