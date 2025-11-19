import express from "express";
import {
  getAllWorkOutDays,
  createWorkOutDay,
  updateWorkOutDay,
  getWorkOutDayById,
  deleteWorkOutDay,
} from "../controllers/workOutDayController.js";

const router = express.Router();

router.get("/", getAllWorkOutDays);
router.get("/:id", getWorkOutDayById);
router.post("/", createWorkOutDay);
router.put("/:id", updateWorkOutDay);
router.delete("/:id", deleteWorkOutDay);

export default router;
