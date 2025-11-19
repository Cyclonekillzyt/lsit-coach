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
    description: { type: String },
    thumbUrl: {type: String},
    notes: { type: String },
  },
  { timestamps: true }
);




const WorkoutDay = mongoose.model("WorkoutDay", workoutDaySchema)
  
export default WorkoutDay;