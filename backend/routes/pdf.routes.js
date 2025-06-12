import express from "express";
import { getAcademicCalendar } from "../controllers/pdf.controller.js";

const router = express.Router();

router.get("/calendar", getAcademicCalendar);

export default router;
