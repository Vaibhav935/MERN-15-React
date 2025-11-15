import React from 'react'

const NavBar = ({setToggle}) => {
  return (
    <div className='flex justify-between px-10 py-4'>
        <h1>logo</h1>
        <h1 onClick={()=> setToggle(prev => !prev)} className='px-4 py-2 rounded bg-amber-600 cursor-pointer text-white'>Cart</h1>
    </div>
  )
}

export default NavBar
