import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MyStore } from "../context/ContextProvider";

const ProtectedRoute = () => {
  const { loggedInUser } = useContext(MyStore);

  if (!loggedInUser) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
