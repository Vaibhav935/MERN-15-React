import React from "react";
import { useSelector } from "react-redux";
import Register from "../components/Register";
import Login from "../components/Login";

const AuthPage = () => {
  let { toggle } = useSelector((state) => state.toggle);

  return <div>{toggle ? <Register /> : <Login />}</div>;
};

export default AuthPage;
