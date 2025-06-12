import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import requestFeatureRoutes from "./routes/requestFeature.routes.js";
import pdfRoutes from "./routes/pdf.routes.js";
import cardRoutes from "./routes/card.routes.js";

import connectDB from "./utils/db.js";

const app = express();
const PORT = process.env.PORT || 5041;
const API_VERSION = process.env.API_VERSION || "/api/v1";

connectDB();

app.use(express.static("static"));

app.use(
  cors({
    origin: "*", // or your frontend URL
  })
);

app.use(express.json());

// Allow iframe embedding (remove block headers)
app.use((req, res, next) => {
  res.removeHeader("X-Frame-Options");
  res.setHeader(
    "Content-Security-Policy",
    "frame-ancestors 'self' http://localhost:5173"
  );
  next();
});

app.use(API_VERSION + "/auth", authRoutes);
app.use(API_VERSION + "/pdfs", pdfRoutes);
app.use(API_VERSION + "/card", cardRoutes);
app.use(API_VERSION, requestFeatureRoutes);

app.get(API_VERSION + "/", (req, res) => {
  res.sendFile("home.html", { root: "./static" });
});

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: "./static" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
});
