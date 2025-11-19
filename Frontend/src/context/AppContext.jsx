import {  createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [test, setTest] = useState("");
  return (
    <AppContext.Provider value={{test, setTest}}> 
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext);