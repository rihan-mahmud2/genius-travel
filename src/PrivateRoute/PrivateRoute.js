import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/ContextProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
