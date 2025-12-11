import {
  House,
  Info,
  LogOut,
  PackageOpen,
  ShoppingCart,
  Users,
} from "lucide-react";
import React, { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import { MyStore } from "../context/ContextProvider";

const SideBar = () => {
  const navigate = useNavigate();
  const { logoutUser } = useContext(MyStore);

  const handleLogout = () => {
    logoutUser();
    // <Navigate to={"/login"} />
    navigate("/login");
  };
  return (
    <div className="shadow-[1px_3px_4px_rgba(0,0,0,0.5)] bg-blue-600 h-[calc(100vh-60px)] w-[200px] p-5 z-100 fixed mt-[60px]">
      <nav className="flex flex-col justify-between mt-5 h-full pb-10">
        <div className="flex flex-col gap-2 mt-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-semibold text-white` : `text-gray-400`
            }
            to="/"
          >
            <div className="flex gap-2 items-center cursor-pointer py-2 rounded-lg px-2 hover:bg-yellow-400 hover:text-white">
              <House size={16} /> <div className="text-xl">Home</div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-semibold text-white` : `text-gray-400`
            }
            to="/products"
          >
            <div className="flex gap-2 items-center cursor-pointer py-2 rounded-lg px-2 hover:bg-yellow-400 hover:text-white">
              <PackageOpen size={16} /> <div className="text-xl">Products</div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-semibold text-white` : `text-gray-400`
            }
            to="/users"
          >
            <div className="flex gap-2 items-center cursor-pointer py-2 rounded-lg px-2 hover:bg-yellow-400 hover:text-white">
              <Users size={16} /> <div className="text-xl">Users</div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-semibold text-white` : `text-gray-400`
            }
            to="/cart"
          >
            <div className="flex gap-2 items-center cursor-pointer py-2 rounded-lg px-2 hover:bg-yellow-400 hover:text-white">
              <ShoppingCart size={16} /> <div className="text-xl">Cart</div>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `font-semibold text-white` : `text-gray-400`
            }
            to="/about"
          >
            <div className="flex gap-2 items-center cursor-pointer py-2 rounded-lg px-2 hover:bg-yellow-400 hover:text-white">
              <Info size={16} /> <div className="text-xl">About</div>
            </div>
          </NavLink>
        </div>
        <div
          className="flex gap-2 text-white items-center cursor-pointer py-2 rounded-lg px-2 hover:bg-red-300 "
          onClick={handleLogout}
        >
          <LogOut size={16} />{" "}
          <span className="text-lg font-semibold ">LogOut</span>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
