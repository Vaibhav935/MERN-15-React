import React, { useContext } from "react";
import { TaskContext } from "../context/AllTaskContext";
import List from "./List";

const TaskContainer = () => {
  const { allTask } = useContext(TaskContext);

  return (
    <div className="border min-h-70 mt-10 p-5 rounded flex flex-col gap-2">
      {allTask.length >= 1 ? allTask.map((e) => <List e={e} />) : <h1>No Task Added</h1>}
      {/* {allTask.map((e) => {
        return <List e={e} />;
      })} */}
    </div>
  );
};

export default TaskContainer;
