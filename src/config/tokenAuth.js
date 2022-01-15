import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
});

const tokenAuth = (token) => {
  if (token) {
    axiosClient.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axiosClient.defaults.headers.common["x-auth-token"];
  }
};

export default tokenAuth;
