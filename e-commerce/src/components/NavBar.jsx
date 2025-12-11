import React, { useContext } from "react";
import { EllipsisVertical, Search, ShoppingCart } from "lucide-react";
import { MyStore } from "../context/ContextProvider";
import { useNavigate } from "react-router";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(MyStore);
  // setLoggedInUser(localStorage.getItem("LoggedInUser"));
  const navigate = useNavigate();

  return (
    <div className="px-10 py-3 flex justify-between items-center bg-yellow-500 shadow-[1px_1px_4px_rgba(0,0,0,0.5)] fixed w-full z-99">
      <div className="font-bold text-xl">Flipkart</div>
      <div className=" w-[40%] flex items-center  gap-1 ">
        <input
          className="text-lg rounded-full px-5 py-1 w-full bg-gray-200 outline-none "
          type="text"
          placeholder="Search for Products"
        />
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer ">
          <Search size={18} />
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          Hello, <span>{loggedInUser?.username}</span>
        </div>
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart size={18} /> <span>Cart</span>
        </div>
        <div className="flex items-center justify-center cursor-pointer ">
          <EllipsisVertical size={18} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
