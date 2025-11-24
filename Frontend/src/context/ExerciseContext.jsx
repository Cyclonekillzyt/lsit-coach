import { createContext, useContext, useState, useEffect } from "react";
import api from "../lib/axios.jsx";
import toast from "react-hot-toast";

const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  const [workOuts, setWorkOuts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      setIsLoading(true)
      const fetchWorkOuts = async () => {
        try {
          const res = await api.get("/workOutDay");
          setWorkOuts(res.data);
          toast.success("loaded");
        } catch (error) {
          toast.error("failed to load notes");
        } finally {
          setIsLoading(false);
        }
      };

      fetchWorkOuts();
    }, []);
  return (
    <ExerciseContext.Provider value={{ workOuts, setWorkOuts, isLoading, setIsLoading }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export const useExercise = () => useContext(ExerciseContext);