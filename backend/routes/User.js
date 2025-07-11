import express from "express"
import { signInUser, signUpUser } from "../controllers/User.js";
import { signUpValidation, logInValidation } from "../middleware/userValidation.js";

export const router = express.Router();

router.post("/signup", signUpValidation, signUpUser);
router.post("/login", logInValidation, signInUser);

