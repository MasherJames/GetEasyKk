import Request from "../models/Request";
import Ride from "../models/Ride";

export default class RequestController {
  static requestRide(req, res) {
    Ride.findById(req.params.id)
      .then(ride => {
        const newRequest = new Request({
          requester: req.user.id,
          driver: ride.driver,
          origin: ride.origin,
          destination: ride.destination,
          seats: req.body.seats
        });

        newRequest.save().then(request => {
          res.status(201).json({
            message: "Ride requested successfully",
            request
          });
        });
      })
      .catch(err =>
        res.status(404).json({
          message: "No ride with that id"
        })
      );
  }
  static getRequestsForSpecificDriver(req, res) {
    Request.find({ driver: req.params.id })
      .then(rides => {
        res.status(200).json(rides);
      })
      .catch(err => {
        res.status(404).json({
          message: "You don't have ride requests for now"
        });
      });
  }

  static getRequestsForSpecificRequester(req, res) {}
  static deleteRequest(req, res) {}
  static getRequestedRides(req, res) {}
  static getAcceptedRequests(req, res) {}
  static getDeclinedRequests(req, res) {}
  static getPendingRequests(req, res) {}
}
