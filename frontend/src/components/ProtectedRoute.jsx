import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../authContext";

export default function ProtectedRoute({ user, children }){
    const {authenticated} = useContext(AuthContext)
    if (!authenticated) {
      return <Navigate to="/" replace />;
    }
  
    return children ? children : <Outlet/>;
  };