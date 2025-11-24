import {  createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState('login')
 
  return (
    <AppContext.Provider value={{currentState, setCurrentState}}> 
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext);