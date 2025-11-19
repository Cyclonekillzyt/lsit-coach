import Achievement from '../models/Achievement.js'

export const getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.status(200).json(achievements);
  } catch (error) {
    console.error("Error in getAllAchievements controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createAchievement = async (req, res) => {
  try {
    const { title, key, description, reward, requiredXp, requiredLevel, icon } =
      req.body;
    const achievement = new Achievement({ title, key, description, reward, requiredXp, requiredLevel, icon });
    const savedAchievement = await achievement.save();
    res.status(201).json(savedAchievement);
  } catch (error) {
    console.error("Error in createAchievement controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateAchievement = async (req, res) => {
  try {
    const { title, key, description, reward, requiredXp, requiredLevel, icon } = req.body;
    const updatedAchievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      { title, key, description, reward, requiredXp, requiredLevel, icon },
      { new: true }
    );
    if (!updatedAchievement) return res.status(404).json({ message: "Achievement not found" });
    res.status(200).json({ message: "Achievement updated successfully" });
  } catch (error) {
    console.error("Error in updateAchievement controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAchievementById = async (req, res) => {
  try {
    const currentAchievement = await Achievement.findById(req.params.id);
    if (!currentAchievement)
      return res.status(404).json({ message: "Achievement not found" });
    res.status(200).json(currentAchievement);
  } catch (error) {
    console.error("Error in updateAchievement controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAchievement = async (req, res) => {
  try {
    const targetAchievement = await Achievement.findByIdAndDelete(req.params.id);
    if (!targetAchievement) return res.status(404).json({ message: "Achievement not found" });
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    console.error("Error in deleteAchievement controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
