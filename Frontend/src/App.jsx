import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ExercisePage from "./pages/ExercisePage";
import ExercisePreviewPage from "./pages/ExercisePreviewPage";
import AchievementPage from "./pages/AchievementPage";
import { Route, Routes } from "react-router";


const App = () => {
  return (
    <div className="w-full h-screen">
      {/*<HomePage /> <ExercisePreviewPage/> <ExercisePage/> <AchievementPage/>*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<ExercisePreviewPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/achievements" element={<AchievementPage />} />
      </Routes>
    </div>
  );
};

export default App;
