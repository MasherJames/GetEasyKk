import express from "express";
import userController from "../../controllers/UserController";
import userValidator from "../../utils/middlewares/userValidator.mjs";

const router = express.Router();

router.post(
  "/signup",
  userValidator.correctCreds,
  userValidator.uniqueUser,
  userController.signup
);

router.post("/login", userValidator.loginCorrectCreds, userController.login);

export default router;
