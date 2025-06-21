import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.api,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
