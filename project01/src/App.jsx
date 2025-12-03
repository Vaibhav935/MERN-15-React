import React, { useContext } from "react";
import TaskBar from "./components/TaskBar";
import Bin from "./components/Bin";
import Chrome from "./components/Chrome";
import File from "./components/File";
import { MyContext } from "./context/ContextProvider";

const App = () => {
  const {
    setChromeToggle,
    setFileToggle,
    setBinToggle,
    chromeToggle,
    fileToggle,
    binToggle,
  } = useContext(MyContext);
  return (
    <div className="h-screen w-full bg-blue-700 " id="bg">
      <TaskBar />
      
      {binToggle ? <Bin /> : ""}
      {fileToggle ? <File /> : ""}
      {chromeToggle ? <Chrome /> : ""}
    </div>
  );
};

export default App;
