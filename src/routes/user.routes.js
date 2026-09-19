import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";


// Router's Configuration
const router = Router();


// User registration router
router.route('/register').post(registerUser);

export { router };