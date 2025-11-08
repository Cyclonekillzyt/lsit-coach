import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: {type: String, unique: true, lowercase: true  },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ["beginner", "intermediate", "advance"], default: "beginner" },
    xpReward: { type: Number, default: 1 },
    type: {type: String, enum: ["timer", "reps"], default: "timer"},
    defaultDuration: { type: Number, default: 0 },
    defaultReps: {type: Number, default: 0},
    media: {type: String, url: String, thumb: String}
  },
  { timestamps: true }
);




const Exercise = mongoose.model("User", exerciseSchema)
  
export default Exercise;