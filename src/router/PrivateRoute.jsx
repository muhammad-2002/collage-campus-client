import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user) {
    return children;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;
