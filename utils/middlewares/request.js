import requestValidator from "../validators/request";

export default class RequestValidator {
  static requestValidator(req, res, next) {
    const { errors, isValid } = requestValidator(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }
}
