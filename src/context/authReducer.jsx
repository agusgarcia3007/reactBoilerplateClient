import { OK_SIGNUP, GET_USERNAME, OK_LOGIN, SIGN_OUT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case OK_SIGNUP:
    case OK_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        msg: null,
      };
    case GET_USERNAME:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case SIGN_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        masg: action.payload,
      };
    default:
      return state;
  }
};
