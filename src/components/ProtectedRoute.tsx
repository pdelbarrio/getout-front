import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }

  return authenticated ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
