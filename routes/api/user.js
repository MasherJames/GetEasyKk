import express from "express";
import userController from "../../controllers/UserController";
import userValidator from "../../utils/middlewares/userValidator";

const router = express.Router();

router.post(
  "/signup",
  userValidator.correctCreds,
  userValidator.uniqueUser,
  userController.signup
);

export default router;
