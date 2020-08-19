import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4558",
});

export default api;
