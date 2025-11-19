import { createContext, useContext, useState } from "react";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [test, setTest] = useState("");
  return (
    <ProgressContext.Provider value={{ test, setTest }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useApp = () => useContext(ProgressContext);
