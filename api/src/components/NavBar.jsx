import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='px-10 py-4 flex justify-end items-center gap-5 bg-stone-700 fixed w-full'>
      <NavLink to="/" className={({isActive}) => isActive ? "text-green-600 font-semibold" : "text-gray-500"}>Home</NavLink>
      <NavLink to="/cart" className={({isActive}) => isActive ? "text-green-600 font-semibold" : "text-gray-500"}>Cart</NavLink>
    </div>
  )
}

export default NavBar
