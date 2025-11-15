import React from 'react'

const login = ({setToggle}) => {
  return (
    <div className='h-screen flex items-center pl-35'>
      <div className='h-[500px] w-[350px] bg-gray-900 rounded-2xl text-white flex flex-col justify-evenly items-center'>
        <h1 className='font-semibold text-2xl '>LOGIN</h1>
        <input className='w-[80%] text-white border p-2 rounded outline-none font-lg' type="text" placeholder='username' />
        <input className='w-[80%] text-white border p-2 rounded outline-none font-lg' type="password" placeholder='password' />
        <button className='bg-blue-400 px-6 py-2 rounded-full text-xl flex items-center justify-center text-black cursor-pointer active:scale-95'>Login</button>
        <p>Don't have an account? <span className='text-blue-400 cursor-pointer font-semibold' onClick={()=> setToggle(prev => !prev)}>Register here</span></p>
      </div>
    </div>
  )
}

export default login
