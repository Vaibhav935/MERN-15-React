import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/AllTaskContext";
import { nanoid } from "nanoid";

const Input = () => {
  const { setAllTask, allTask, updateID } = useContext(TaskContext);
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      const updatedArr = [...allTask, { id: nanoid(), task: task }];
      setAllTask(updatedArr);
      localStorage.setItem("task", JSON.stringify(updatedArr));
    } else {
      alert("Please enter task first.");
    }
    setTask("");
  };

  useEffect(() => {
    if (updateID) {
      const updatingTask = allTask.find((val) => val.id == updateID) || "";
      setTask(updatingTask.task);
      const otherTask = allTask.filter((val) => val.id !== updateID);
      setAllTask(otherTask);
    }
  }, [updateID]);

  return (
    <div className="flex">
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="px-4 py-2 bg-white text-xl rounded text-black placeholder:text-gray-400 "
          type="text"
          placeholder="Enter task"
        />
        {updateID ? (
          <button className="px-4 py-2 text-xl cursor-pointer active:scale-99 rounded bg-yellow-500 font-semibold">
            Update
          </button>
        ) : (
          <button className="px-4 py-2 text-xl cursor-pointer active:scale-99 rounded bg-emerald-400 font-semibold">
            Add TAsk
          </button>
        )}
      </form>
    </div>
  );
};

export default Input;
// const allUpdatedTask = [...otherTask, updatingTask]
