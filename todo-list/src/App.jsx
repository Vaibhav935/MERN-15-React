import React from 'react'
import Input from './components/Input'
import TaskContainer from './components/TaskContainer'

const App = () => {
  return (
    <div className='bg-[#111] h-screen w-full flex items-center text-white flex-col '>
      <h1 className='text-2xl font-bold  mb-10 mt-15'>To-Do List</h1>
      <div>
        <Input/>
        <TaskContainer/>
      </div>
    </div>
  )
}

export default App
