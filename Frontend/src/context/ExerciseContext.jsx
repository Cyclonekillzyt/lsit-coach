import {  createContext, useContext, useState } from "react";

const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  const [test, setTest] = useState("");
  return (
    <ExerciseContext.Provider value={{ test, setTest }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export const useApp = () => useContext(ExerciseContext);