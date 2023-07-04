import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "./helpers";

const AuthorizedRoute = ({ children, roles }) => {
  const token = getCookie("access_token");
  let location = useLocation();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return children;
};

export default AuthorizedRoute;
