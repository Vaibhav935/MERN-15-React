import React, { useContext } from "react";
import { TaskContext } from "../context/AllTaskContext";

const List = ({e}) => {
  const { allTask, setAllTask, setUpdateID } = useContext(TaskContext);

  const deleteTask = (e) => {
    const remainingTask = allTask.filter((task) => task.id !== e.id);
    setAllTask(remainingTask);
    localStorage.setItem("task", JSON.stringify(remainingTask));
  };
  const updateTask = (e) => {
    setUpdateID(e.id);
  };

  return (
    <div>
      <div
        key={e.id}
        className="flex justify-between items-center bg-emerald-500 py-1 px-2 rounded "
      >
        <h1 className="text-xl">{e.task}</h1>
        <div className="flex gap-2 ">
          <button
            onClick={() => {
              updateTask(e);
            }}
            className="px-3 py-1 rounded cursor-pointer bg-yellow-500"
          >
            Update
          </button>
          <button
            onClick={() => {
              deleteTask(e);
            }}
            className="px-3 py-1 rounded cursor-pointer bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
