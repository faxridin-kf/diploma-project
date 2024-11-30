import Axios from "axios";

const intance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  withCredentials: true,
});

// intance.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     config.headers.Authorization = window.localStorage.getItem("token");
//   }
//   return config;
// });
export default intance;
