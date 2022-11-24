import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const ProtectedRoute = () => {
  const { user } = UserAuth();

  return !user ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRoute;
