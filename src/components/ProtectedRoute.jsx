import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "./auth";

const ProtectedRoute = ({ element, ...rest }) => {
  const { authenticatedUser } = useAuth();

  return authenticatedUser ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
