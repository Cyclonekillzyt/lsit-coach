import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    slug: { type: String, unique: true, lowercase: true },
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    type: { type: String, enum: ["timer", "reps"], default: "timer" },
    defaultDuration: { type: Number, default: 0 },
    defaultReps: { type: Number, default: 0 },
    xp: { type: Number, default: 1 },
    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advance"],
      default: "beginner",
    },
    tags: { type: [String] },
    muscles: { type: [String] },
    equipment: {type: String},
    videoUrl: { type: String },
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;

