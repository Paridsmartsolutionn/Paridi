import axios from "axios";

const mainAxios = axios.create({
  baseURL: "http://192.168.1.99:3000",
});

// axios.interceptors.request.use(function (config) {
//     // console.log({config})

//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     // console.log({response})
//     return response;
//   }, function (error) {
//     // console.log({error})
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

export default mainAxios;
