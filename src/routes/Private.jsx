import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import React from "react";

const useRoute = () => {
  const authContext = useContext(AuthContext);
  const { token, userAuthenticated } = authContext;

  useEffect(() => {
    userAuthenticated();
    //eslint-disable-next-line
  }, []);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default useRoute;
