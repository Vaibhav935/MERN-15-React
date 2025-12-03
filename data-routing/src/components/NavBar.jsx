import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="flex h-15 justify-center items-center gap-10 border">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default NavBar;
