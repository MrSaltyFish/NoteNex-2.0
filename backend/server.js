import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import requestFeatureRoutes from "./routes/requestFeature.route.js";
import connectDB from "./utils/db.js";

const app = express();
const PORT = process.env.PORT || 5041;
const API_VERSION = process.env.API_VERSION || "/api/v1";

connectDB();

app.use(express.static("static"));

app.use(cors());
app.use(express.json());

app.use(API_VERSION + "/auth", authRoutes);
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
