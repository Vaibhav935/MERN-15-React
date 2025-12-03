import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
