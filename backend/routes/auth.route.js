import { Router } from "express";
import { handleLogin } from "../controllers/auth.controller.js";

const router = Router();

router.get("/login", handleLogin);

export default router;
