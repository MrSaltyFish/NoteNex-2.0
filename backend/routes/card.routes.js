import express from "express";
import { getCardData } from "../controllers/card.controller.js";

const router = express.Router();

router.get("/cards", getCardData);

export default router;
