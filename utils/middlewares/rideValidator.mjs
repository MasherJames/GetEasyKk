import rideValiadator from "../validators/createRide.mjs";

export default class RideValidator {
    static rideCorrectCredentials(req, res, next) {
        const {
            errors,
            isValid
        } = rideValiadator(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
        next();
    }
}