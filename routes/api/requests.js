import express from "express";
import passport from "passport";
import RequestController from "../../controllers/RequestRideController";
import RequestValidator from "../../utils/middlewares/request";
const router = express.Router();

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  RequestValidator.requestValidator,
  RequestController.requestRide
);

router.get(
  "/:id/drivers",
  passport.authenticate("jwt", { session: false }),
  RequestController.getRequestsForSpecificDriver
);

export default router;
