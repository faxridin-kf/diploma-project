import Axios from "axios";

const intance = Axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default intance;
