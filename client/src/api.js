import axios from "axios";

const api = axios.create({
  baseURL: `${api}:3000/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
