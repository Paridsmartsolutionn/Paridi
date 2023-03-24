import axios from "axios";
import { getCookie } from "./helpers";

// For common config
axios.defaults.headers.post["Content-Type"] = "application/json";

export const mainAxios = new axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
});

export const setAuthToken = (token) => {
  if (token) {
    //applying token
    mainAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    //deleting the token from header
    delete mainAxios.defaults.headers.common["Authorization"];
  }
};

const AxiosInterceptor = ({ children }) => {
  mainAxios.interceptors.request.use(
    (request) => {
      const token = getCookie("access_token");
      request.headers.Authorization = `Bearer ${token}`;
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return children;
};

export default mainAxios;
export { AxiosInterceptor };
