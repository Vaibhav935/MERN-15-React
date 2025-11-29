import { createContext, useState } from "react";

export const TaskContext = createContext();
const AllTaskContext = ({ children }) => {
  const [allTask, setAllTask] = useState(JSON.parse(localStorage.getItem("task")) || []);
  const [updateID, setUpdateID] = useState(null)
  return (
    <div>
      <TaskContext.Provider value={{ allTask, setAllTask, updateID, setUpdateID }}>
        {children}
      </TaskContext.Provider>
    </div>
  );
};

export default AllTaskContext;
