import passJwt from "passport-jwt";
import User from "../models/User.mjs";

const JwtStrategy = passJwt.Strategy;
const ExtractJwt = passJwt.ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

const func = passport => {
    passport.use(
        new JwtStrategy(opts, (pay_load, done) => {
            User.findById(pay_load.id)
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

export default func