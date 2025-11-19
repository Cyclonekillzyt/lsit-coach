import Exercise from "../models/Exercise.js";

export const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find().sort({ createdAt: -1 });
    res.status(200).json(exercises);
  } catch (error) {
    console.error("Error in getAllExercises controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createExercise = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      difficulty,
      xpReward,
      type,
      defaultDuration,
      defaultReps,
      media,
    } = req.body;
    const exercise = new Exercise({
      name,
      slug,
      description,
      difficulty,
      xpReward,
      type,
      defaultDuration,
      defaultReps,
      media,
    });
    const savedExercise = await exercise.save();
    res.status(201).json(savedExercise);
  } catch (error) {
    console.error("Error in createExercise controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateExercise = async (req, res) => {
  try {
    const {
      name,
      slug,
      description,
      difficulty,
      xpReward,
      type,
      defaultDuration,
      defaultReps,
      media,
    } =
      req.body;
    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      {
      name,
      slug,
      description,
      difficulty,
      xpReward,
      type,
      defaultDuration,
      defaultReps,
      media,
    },
      { new: true }
    );
    if (!updatedExercise)
      return res.status(404).json({ message: "Exercise not found" });
    res.status(200).json({ message: "Exercise updated successfully" });
  } catch (error) {
    console.error("Error in updateExercise controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getExerciseById = async (req, res) => {
  try {
    const currentExercise = await Exercise.findById(req.params.id);
    if (!currentExercise)
      return res.status(404).json({ message: "Exercise not found" });
    res.status(200).json(currentExercise);
  } catch (error) {
    console.error("Error in updateExercise controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const targetExercise = await Exercise.findByIdAndDelete(
      req.params.id
    );
    if (!targetExercise)
      return res.status(404).json({ message: "Exercise not found" });
    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    console.error("Error in deleteExercise controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
