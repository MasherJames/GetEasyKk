import express from "express";
import userController from "../../controllers/UserController";
import userValidator from "../../middlewares/userValidator";

const router = express.Router();

router.post(
  "/signup",
  userController.signup,
  userValidator.uniqueUser,
  userValidator.correctCreds
);

// router.post("/login");

export default router;
