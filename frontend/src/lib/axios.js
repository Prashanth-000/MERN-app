import axios from "axios";

// in production, use the deployed backend URL
const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:5001/api" 
  : import.meta.env.VITE_API_URL || "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
