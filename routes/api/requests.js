import express from "express";
import passport from "passport";
import RequestController from "../../controllers/RequestRideController";
import RequestValidator from "../../utils/middlewares/request";
const router = express.Router();

router.post(
  "/:id",
  RequestValidator.requestValidator,
  RequestController.requestRide
);

router.get("/:id/users", RequestController.getRequestsForSpecificDriver);

router.get("/:id/users", RequestController.getRequestsForSpecificRequester);

export default router;
