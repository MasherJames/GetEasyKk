import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  static login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
      if (!user) {
        return res.status(404).json({
          message: `user with email ${email} does not exist`
        });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) {
          return res.status(401).json({
            message: `Incorrect password for ${email}`
          });
        }

        const payload = {
          id: user._id,
          username: user.username,
          email: user.email
        };
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.status(200).json({
              message: "succcessfully loggedin",
              token: `Bearer ${token}`
            });
          }
        );
      });
    });
  }
}
