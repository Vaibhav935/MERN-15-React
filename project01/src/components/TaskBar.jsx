import React, { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

const TaskBar = () => {
  const { setChromeToggle, setFileToggle, setBinToggle } =
    useContext(MyContext);

  return (
    <div className="h-10 w-full bg-blue-200 absolute bottom-0 flex justify-center gap-10">
      <img
        className="h-10 cursor-pointer "
        onClick={() => setBinToggle(true)}
        src="https://img.icons8.com/?size=96&id=74176&format=png"
        alt=""
      />
      <img
        className="h-10 cursor-pointer "
        onClick={() => setFileToggle(true)}
        src="https://img.icons8.com/?size=96&id=Jw9nt2gzEivq&format=png"
        alt=""
      />
      <img
        className="h-10 cursor-pointer "
        onClick={() => setChromeToggle(true)}
        src="https://img.icons8.com/?size=96&id=63785&format=png"
        alt=""
      />
    </div>
  );
};

export default TaskBar;
