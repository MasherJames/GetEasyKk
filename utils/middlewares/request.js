import requestValidator from "../validators/request";
import Request from "../../models/Request";

export default class RequestValidator {
  static uniqueRequest(req, res, next) {
    Request.findOne({ requester: req.user.id })
      .then(request => {
        if (request) {
          return res.status(400).json({
            message: "Ride already requested"
          });
        }
        next();
      })
      .catch(next);
  }

  static requestValidator(req, res, next) {
    const { errors, isValid } = requestValidator(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }
}
