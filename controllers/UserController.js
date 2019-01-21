import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

import User from "../models/User";

export default class UserController {
  static signup(req, res) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          res.status(500).json({
            error: {
              message: err
            }
          });
        } else {
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
          });
          newUser.save().then(user => {
            res.status(201).json({
              message: `Account created successfully`,
              user
            });
          });
        }
      });
    });
  }
}
