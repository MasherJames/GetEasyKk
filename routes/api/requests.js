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
  "/:id/users",
  passport.authenticate("jwt", { session: false }),
  RequestController.getRequestsForSpecificDriver
);

router.get(
  "/:id/users",
  passport.authenticate("jwt", { session: false }),
  RequestController.getRequestsForSpecificRequester
);

export default router;
