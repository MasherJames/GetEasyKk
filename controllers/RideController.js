import Ride from "../models/Ride";
export default class RideController {
  static createRide(req, res) {
    const newRide = new Ride({
      driver: req.user.id,
      origin: req.body.origin,
      destination: req.body.destination,
      capacity: req.body.capacity
    });
    newRide.save().then(ride => {
      res.status(201).json({
        message: "Ride offer created successfully",
        ride
      });
    });
  }

  static getRides(req, res) {
    Ride.find()
      .sort({ date: -1 })
      .then(rides => {
        if (rides.length < 1) {
          return res.status(404).json({
            message: "There are no ride offers for now"
          });
        }
        res.status(200).json({ rides });
      });
  }

  static getRide(req, res) {
    Ride.findById(req.params.id)
      .then(ride => {
        res.status(200).json(ride);
      })
      .catch(err =>
        res.status(404).json({
          message: "No ride with this id"
        })
      );
  }
}
