// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth"; // varsa useAuth hook’un, yoksa direkt context’ten çek

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-white text-center mt-10">Yükleniyor...</div>;

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
