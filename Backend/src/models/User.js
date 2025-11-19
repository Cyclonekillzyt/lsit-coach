import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    totalWorkoutCompleted: { type: Number, default: 0 },
    lastDayCompleted: { type: Number, default: 0 },
    achievements: { type: [String], default: [] }
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema)
  
export default User;