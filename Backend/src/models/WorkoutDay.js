import mongoose from "mongoose";

const workoutDaySchema = new mongoose.Schema(
  {
    dayNumber: { type: Number, required: true, unique: true },
    exercises: [
      {
        position: { type: Number, required: true },
        exerciseId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Exercise",
          required: true,
        },
      },
    ],
    totalXP: { type: Number, default: 0 },

    notes: { type: String },
  },
  { timestamps: true }
);




const WorkoutDay = mongoose.model("User", workoutDaySchema)
  
export default WorkoutDay;