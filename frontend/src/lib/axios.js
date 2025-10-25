import axios from "axios";
// Use environment variables for the API URL
const BASE_URL = import.meta.env.VITE_API_URL;


const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
