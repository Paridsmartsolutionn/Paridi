import axios from "axios";
import { getCookie } from "./helpers";

const Api = {
  baseUrl: process.env.REACT_APP_API_KEY,
  setHeader: function () {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${getCookie("access_token")}`,
    };
  },
  get: function (url) {
    let reqUrl = this.baseUrl + url;
    this.setHeader();
    let response = axios.get(reqUrl);
    console.log(response);
    return response;
  },
  post: function (url, data) {
    let reqUrl = this.baseUrl + url;
    this.setHeader();
    let response = axios.post(reqUrl, data);
    return response.data;
  },
};

export default Api;
