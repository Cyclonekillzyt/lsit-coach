import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/ExercisePage";
import ExercisePreviewPage from "./pages/ExercisePreviewPage";
import AchievementPage from "./pages/AchievementPage";
import { Route, Routes } from "react-router";
import SignUpForm, { LoginForm } from "./components/Form";



const App = () => {

  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/preview" element={<ExercisePreviewPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/achievements" element={<AchievementPage />} />
        <Route path="/register" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
     
    </div>
  );
};

export default App;
