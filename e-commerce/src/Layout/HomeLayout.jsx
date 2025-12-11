import React from "react";
import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  console.log("HOme layout");
  return (
    <>
      <NavBar />
      <div className="flex ">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
