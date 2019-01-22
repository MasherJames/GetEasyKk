import Ride from "../models/Ride";
import User from "../models/User";
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
        if (!ride) {
          return res.status(404).json({
            message: "No ride with that id"
          });
        }
        res.status(200).json(ride);
      })
      .catch(err =>
        res.status(404).json({
          message: "No ride with this id"
        })
      );
  }

  static deleteRide(req, res) {
    User.findById(req.user.id).then(user => {
      Ride.findById(req.params.id)
        .then(ride => {
          if (ride.driver.toString() !== req.user.id) {
            return res.status(401).json({
              message: "You are no allowed to delete this ride"
            });
          }
          ride.remove().then(() =>
            res.status(200).json({
              message: "Ride deleted successfully"
            })
          );
        })
        .catch(err =>
          res.status(404).json({
            message: "No ride with this id"
          })
        );
    });
  }

  static updateRide(req, res) {
    User.findById(req.user.id).then(user => {
      Ride.findById(req.params.id)
        .then(ride => {
          if (ride.driver.toString() !== req.user.id) {
            return res.status(401).json({
              message: "You are not allowed to updated this ride"
            });
          }
          ride
            .findOneAndUpdate(
              { user: req.user.id },
              { $set: req.body },
              { new: true }
            )
            .then(ride =>
              res.status(200).json({ message: "Ride update successfully" })
            )
            .catch(err => res.json(err));
        })
        .catch(err =>
          res.status(404).json({
            message: "No ride with that d"
          })
        );
    });
  }
}
