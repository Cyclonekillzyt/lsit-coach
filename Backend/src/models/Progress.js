import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    exercisesCompleted: [{
      exerciseId: {type: mongoose.Schema.Types.ObjectId, ref: "Exercise", required: true},
    }],
    xpEarned: { type: Number, default: 0 },
    dayNumber: { type: Number, required: true },
    completed: {type: Boolean, default: false}
  },
  { timestamps: true }
);




const Progress = mongoose.model("User", progressSchema)
  
export default Progress;