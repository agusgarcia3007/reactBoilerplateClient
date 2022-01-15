import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKURL,
});

const tokenAuth = (token) => {
  if (token) {
    axiosClient.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axiosClient.defaults.headers.common["x-auth-token"];
  }
};

export default tokenAuth;
