import express from "express";
import passport from "passport";
import RequestController from "../../controllers/RequestRideController";
import RequestValidator from "../../utils/middlewares/request";
const router = express.Router();

router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  RequestValidator.uniqueRequest,
  RequestValidator.requestValidator,
  RequestController.requestRide
);

export default router;
