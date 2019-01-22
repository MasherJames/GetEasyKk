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
}
