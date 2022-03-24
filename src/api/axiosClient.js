import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://qtpq.azurewebsites.net/api",
});
//Interceptors --muốn làm 1 cái gì cho tất cả req hoặc response
// Add a request interceptor
// axiosClient.interceptors.request.use(
//   (config) => {
//     const jwtToken = localStorage.getItem("token") || "";
//     if (!config.headers.Authorization) {
//       const token = jwtToken;

//       if (token) {
//         config.headers.Authorization = token;
//       }
//     }

//     return config;
//   },
//   function (error) {
//     console.log(error, "data neee");
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

export { axiosClient };
