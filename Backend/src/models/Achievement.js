import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    key: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    reward: {
      xp: { type: String, default: 0 },
    },
    requiredXp: { type: Number, default: 0 },
    requiredLevel: { type: Number, default: 0 },
    icon: { type: String, required: true },
  },
  { timestamps: true }
);

const Achievement = mongoose.model("User", achievementSchema);

export default Achievement;
