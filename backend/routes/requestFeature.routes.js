import { Router } from "express";
import { addRequestToDB } from "../controllers/requestFeature.controller.js";

const router = Router();

router.post("/request-feature", addRequestToDB);

export default router;
