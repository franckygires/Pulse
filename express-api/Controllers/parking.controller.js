const Parking = require("../Models/parking.model");

exports.createParking = (req, res, next) => {
  console.log(req.body);

  const parking = new Parking({
    ...req.body,
  });
  parking
    .save()
    .then(() => res.status(201).json({ message: "Parking registered" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getById = (req, res, next) => {
  Parking.findOne({ _id: req.params.id })
    .then((parking) => res.status(200).json(parking))
    .catch((error) => res.status(400).json({ error }));
};

// exports.getByUserId = (req, res, next) => {
//   Parking.find({ userId: req.params.id })
//     .then((parkings) => res.status(200).json(parkings))
//     .catch((error) => res.status(400).json({ error }));
// };

exports.getAllParking = (req, res, next) => {
  Parking.find()
    .then((parkings) => res.status(200).json(parkings))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteParking = (req, res, next) => {
  // return res.json(req.params.id);
  Parking.findOne({ _id: req.params.id }).then((parking) => {
    // return res.json(parking);
    if (!parking) {
      res.status(404).json({
        error: new Error("No such Parking!"),
      });
    }
    else {
      Parking.deleteOne({ _id: req.params.id })
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

exports.updateParking = (req, res, next) => {
  Parking.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(201).json({ message: "Parking updated" }))
    .catch((error) => res.status(400).json({ error }));
};
