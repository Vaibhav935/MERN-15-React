import React from 'react'
import AppRouter from './Routes/AppRouter'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='min-h-screen bg-stone-400'>
      <NavBar/>
      <AppRouter/>
      <ToastContainer autoClose={1000}/>
    </div>
  )
}

export default App
