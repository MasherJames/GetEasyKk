import User from "../models/User";
import isEmpty from "./isEmpty";

export default class UserValidator {
  static uniqueUser(req, res, next) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(409).json({
          message: "User with this email already exists"
        });
      }
    });
    next().catch(err => console.log(err));
  }
  static correctCreds(req, res, next) {
    const { username, email, password, confirmPassword } = req.body;
    let errors = {};
    if (isEmpty(username)) {
      errors.username = "Username field is required";
    }
    res.status(400).json(errors);
    next();
  }
}
