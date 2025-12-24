import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import { logout } from "../features/authSlice";

const NavBar = () => {
    const dispatch =  useDispatch()

    const logoutFn = ()=> {
        localStorage.setItem("log user", null)
        dispatch(logout(null))
    }
  return (
    <div className="flex justify-between px-8 py-2 border-b-2 border-stone-400 ">
      <h1>LOGO</h1>
      <div className="flex gap-5">
        <NavLink
          className={({isActive}) =>
            isActive ? `font-semibold text-black` : `text-gray-400`
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive ? `font-semibold text-black` : `text-gray-400`
          }
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive ? `font-semibold text-black` : `text-gray-400`
          }
          to="/cart"
        >
          Cart
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive ? `font-semibold text-black` : `text-gray-400`
          }
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div>
        <button onClick={logoutFn} className="bg-red-500 rounded px-4 py-0.5 cursor-pointer ">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
