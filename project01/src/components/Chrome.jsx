import React, { useContext } from "react";
import { MyContext } from "../context/ContextProvider";
import { Maximize, X } from "lucide-react";

const Chrome = () => {
  const { setChromeToggle, setFileToggle, setBinToggle } =
    useContext(MyContext);
  return (
    <div className="bg-red-300 h-80 w-130  rounded overflow-hidden absolute top-45 left-40 ">
      <div className="bg-[#111] gap-4 w-full h-10 text-white justify-end flex  items-center px-5 text-2xl ">
        <span className="cursor-pointer"><Maximize /></span>

        <span
          onClick={() => setChromeToggle(false)}
          className="cursor-pointer "
        >
          <X/>
        </span>
      </div>
      <div className="p-5">
        <h1 className="text-2xl ">Chrome</h1>
      </div>
    </div>
  );
};

export default Chrome;
