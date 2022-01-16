import { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import tokenAuth from "../config/tokenAuth";
import { OK_SIGNUP, GET_USERNAME, OK_LOGIN, SIGN_OUT } from "../types";
import { axiosClient } from "../config/tokenAuth";
import { useNavigate } from "react-router-dom";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //functions
  //return authed user
  const userAuthenticated = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const resp = await axiosClient.get("/api/auth");

      //dispatch
      dispatch({
        type: GET_USERNAME,
        payload: resp.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (data) => {
    try {
      const resp = await axiosClient.post("/api/users", data);

      dispatch({
        type: OK_SIGNUP,
        payload: resp.data,
      });

      //get user
      userAuthenticated();
    } catch (error) {
      console.log(error);
    }
  };
  //login
  const login = async (data) => {
    try {
      const resp = await axiosClient.post("/api/auth", data);
      console.log(resp);
      dispatch({
        type: OK_LOGIN,
        payload: resp.data,
      });

      userAuthenticated();
    } catch (error) {
      console.log(error);
    }
  };

  //sign out
  const signOut = () => {
    dispatch({
      type: SIGN_OUT,
    });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        msg: state.msg,
        signUp,
        login,
        userAuthenticated,
        signOut,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
