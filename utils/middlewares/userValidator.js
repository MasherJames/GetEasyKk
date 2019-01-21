import User from "../../models/User";
import registerValidator from "../validators/register";
import loginValidator from "../validators/login";

export default class UserValidator {
  static correctCreds(req, res, next) {
    const { errors, isValid } = registerValidator(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }

  static uniqueUser(req, res, next) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          return res.status(409).json({
            message: "User with this email already exists"
          });
        }
        next();
      })
      .catch(next);
  }

  static loginCorrectCreds(req, res, next) {
    const { errors, isValid } = loginValidator(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    next();
  }
}
