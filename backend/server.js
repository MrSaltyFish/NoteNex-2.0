import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 5041;
const API_VERSION = process.env.API_VERSION || "/api/v1";
app.use(express.static("static"));

app.use(API_VERSION + "/auth", authRoutes);

app.get(API_VERSION + "/", (req, res) => {
  res.sendFile("home.html", { root: "./static" });
});

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: "./static" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on http://localhost:${PORT}`);
});
