import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import Todo from "./components/Todo";

const App = () => {
  const [Task, setTask] = useState("");
  const { todos } = useSelector((state) => state.todo);
  console.log(todos);

  const dispatch = useDispatch();

  const addTodo = ()=> {
    const todo = {
      id: nanoid(),
      text: Task
    }
    dispatch(add(todo))
    setTask("")
  }

   

  return (
    <div>
      <h1>app</h1>
      <div>
        <input
          value={Task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="write here"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} text={todo.text} id={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export default App;
