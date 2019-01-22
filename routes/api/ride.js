import express from "express";
import passport from "passport";
import rideController from "../../controllers/RideController";
import rideValidator from "../../utils/middlewares/rideValidator";

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  rideValidator.rideCorrectCredentials,
  rideController.createRide
);

export default router;
