import React, { useContext, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { MyStore } from "../context/ContextProvider";

const AuthLayout = () => {
  const { authToggle, setAuthToggle } = useContext(MyStore);
  // localStorage.clear();

  return (
    <div>
      {authToggle ? (
        <Login setToggle={authToggle} />
      ) : (
        <Register setToggle={setAuthToggle} />
      )}
    </div>
  );
};

export default AuthLayout;
