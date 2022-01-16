import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import React from "react";

const useRoute = () => {
  const authContext = useContext(AuthContext);
  const { authenticated, userAuthenticated } = authContext;

  useEffect(() => {
    userAuthenticated();
    //eslint-disable-next-line
  }, []);

  return authenticated ? <Outlet /> : <Navigate to="/" />;
};

export default useRoute;
