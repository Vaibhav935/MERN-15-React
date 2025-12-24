import React, { useState } from "react";
import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/Home";
import About from "../pages/About";
import PublicRoute from "../components/PublicRoute";
import ProtectedRoute from "../components/ProtectedRoute";
import Cart from "../pages/Cart";
import Users from "../pages/Users";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route path="/home" element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        } />
        <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
        <Route path="/about" element={
            <ProtectedRoute>
                <About />
            </ProtectedRoute>
        } />
      </Routes>
    </>
  );
};

export default AppRouter;
