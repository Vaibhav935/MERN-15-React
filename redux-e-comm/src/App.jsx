import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";
import AuthPage from "./pages/AuthPage";
import NavBar from "./components/NavBar";
import { useLocation } from "react-router";

const App = () => {
  const { pathname } = useLocation();


  return (
    <div>
      {pathname !== "/" ? <NavBar /> : null}
      <AppRouter />
    </div>
  );
};

export default App;
