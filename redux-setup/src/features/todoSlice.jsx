import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "first todo" }],
};

export const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter(task => task.id !== action.payload)
      
    },
  },
});

export const { add, deleteTask } = todoReducer.actions;

export default todoReducer.reducer;
