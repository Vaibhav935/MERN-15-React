import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/todoSlice';

const Todo = ({text, deleteT,id}) => {
    const { todos } = useSelector((state) => state.todo);
    const dispatch = useDispatch()

    // const {todos} = useSelector(state => state.todos)

  return (
    <div>
      <ul>
        <li>{text} <button onClick={()=> dispatch(deleteTask(id))}>Delete</button></li>
      </ul>
    </div>
  )
}

export default Todo
