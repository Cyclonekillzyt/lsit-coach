import express from "express";
import {
  getAllAchievements,
  createAchievement,
  updateAchievement,
  getAchievementById,
  deleteAchievement,
} from "../controllers/achievementsController.js";

const router = express.Router();

router.get("/", getAllAchievements);
router.get("/:id", getAchievementById);
router.post("/", createAchievement);
router.put("/:id", updateAchievement);
router.delete("/:id", deleteAchievement);

export default router;
