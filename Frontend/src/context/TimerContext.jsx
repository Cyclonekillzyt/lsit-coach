import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [test, setTest] = useState("");
  return (
    <TimerContext.Provider value={{ test, setTest }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
