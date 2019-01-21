import passJwt from "passport-jwt";
import User from "../models/User";
import config from "./config";

const JwtStrategy = passJwt.Strategy;
const ExtractJwt = passJwt.ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.SECRET_KEY;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (pay_load, done) => {
      User.findById({ email: pay_load.id })
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {
          return done(err, false);
        });
    })
  );
};
