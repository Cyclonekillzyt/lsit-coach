import WorkOutDay from "../models/WorkoutDay.js";

export const getAllWorkOutDays = async (req, res) => {
  try {
    const workOutDay = await WorkOutDay.find().sort({ createdAt: -1 });
    res.status(200).json(workOutDay);
  } catch (error) {
    console.error("Error in getAllWorkOutDay controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createWorkOutDay = async (req, res) => {
  try {
    const { dayNumber, exercises, totalXP, notes } = req.body;
    const workOutDay = new WorkOutDay({ dayNumber, exercises, totalXP, notes });
    const savedWorkOutDay = await workOutDay.save();
    res.status(201).json(savedWorkOutDay);
  } catch (error) {
    console.error("Error in createWorkOutDay controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateWorkOutDay = async (req, res) => {
  try {
    const { dayNumber, exercises, totalXP, notes } = req.body;
    const updatedWorkOutDay = await WorkOutDay.findByIdAndUpdate(
      req.params.id,
      { dayNumber, exercises, totalXP, notes },
      { new: true }
    );
    if (!updatedWorkOutDay)
      return res.status(404).json({ message: "WorkOutDay not found" });
    res.status(200).json({ message: "WorkOutDay updated successfully" });
  } catch (error) {
    console.error("Error in updateWorkOutDay controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getWorkOutDayById = async (req, res) => {
  try {
    const currentWorkOutDay = await WorkOutDay.findById(req.params.id);
    if (!currentWorkOutDay)
      return res.status(404).json({ message: "WorkOutDay not found" });
    res.status(200).json(currentWorkOutDay);
  } catch (error) {
    console.error("Error in updateWorkOutDay controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteWorkOutDay = async (req, res) => {
  try {
    const targetWorkOutDay = await WorkOutDay.findByIdAndDelete(req.params.id);
    if (!targetWorkOutDay)
      return res.status(404).json({ message: "WorkOutDay not found" });
    res.status(200).json({ message: "WorkOutDay deleted successfully" });
  } catch (error) {
    console.error("Error in deleteWorkOutDay controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
