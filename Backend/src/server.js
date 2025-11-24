import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import protect from "./middleware/authMiddleware.js";
import cookieParser from 'cookie-parser'

import exerciseRoutes from "./routes/exerciseRoutes.js";
import achievementsRoutes from "./routes/achievementsRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import workOutDayRoutes from "./routes/workOutDayRoutes.js";

dotenv.config();

const app = express();
const port = process.env.Port || 5002;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);




app.use("/api/auth", userRoutes);
app.use("/api/achievements", protect, achievementsRoutes);
app.use("/api/exercise", protect, exerciseRoutes);
app.use("/api/progress", protect, progressRoutes);
app.use("/api/workoutday", workOutDayRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server Started on Port localhost:${port}`);
  });
});
