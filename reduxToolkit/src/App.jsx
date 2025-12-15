import React from "react";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";

const App = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="mt-10 font-semibold text-4xl">Todo App using Redux</h1>
      <AddTodos/>
      <Todos />
    </div>
  );
};

export default App;
