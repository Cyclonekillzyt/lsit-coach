import express from "express";
import { register, login } from "../controllers/userController.js";
import {body} from "express-validator"

const router = express.Router();


router.post("/register", body("email").isEmail(),
  body("password").isLength({ min: 8 }), register);

router.post("/login", body("email").isEmail(), body("password").exists(), login);

router.get("/me", protect, me);


router.post("/logout", logout);

export default router;