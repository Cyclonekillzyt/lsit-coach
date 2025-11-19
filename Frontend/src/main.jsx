import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { ExerciseProvider } from "./context/ExerciseContext.jsx";
import { ProgressProvider } from "./context/ProgressContext.jsx";
import { TimerProvider } from "./context/TimerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <ExerciseProvider>
        <ProgressProvider>
          <TimerProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TimerProvider>
        </ProgressProvider>
      </ExerciseProvider>
    </AppProvider>
  </StrictMode>
);
