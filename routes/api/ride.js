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

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  rideController.getRides
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  rideController.getRide
);

export default router;
