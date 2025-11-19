import Progress from "../models/Progress.js";

export const getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.find().sort({ createdAt: -1 });
    res.status(200).json(progress);
  } catch (error) {
    console.error("Error in getAllProgress controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createProgress = async (req, res) => {
  try {
    const { exercisesCompleted, xpEarned, dayNumber, completed } = req.body;
    const progress = new Progress({
      exercisesCompleted,
      xpEarned,
      dayNumber,
      completed,
    });
    const savedProgress = await progress.save();
    res.status(201).json(savedProgress);
  } catch (error) {
    console.error("Error in createProgress controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const { exercisesCompleted, xpEarned, dayNumber, completed } = req.body;
    const updatedProgress = await Progress.findByIdAndUpdate(
      req.params.id,
      { exercisesCompleted, xpEarned, dayNumber, completed },
      { new: true }
    );
    if (!updatedProgress)
      return res.status(404).json({ message: "Progress not found" });
    res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
    console.error("Error in updateProgress controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getProgressById = async (req, res) => {
  try {
    const currentProgress = await Progress.findById(req.params.id);
    if (!currentProgress)
      return res.status(404).json({ message: "Progress not found" });
    res.status(200).json(currentProgress);
  } catch (error) {
    console.error("Error in updateProgress controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProgress = async (req, res) => {
  try {
    const targetProgress = await Progress.findByIdAndDelete(req.params.id);
    if (!targetProgress)
      return res.status(404).json({ message: "Progress not found" });
    res.status(200).json({ message: "Progress deleted successfully" });
  } catch (error) {
    console.error("Error in deleteProgress controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
