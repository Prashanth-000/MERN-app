import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// Use environment variables for the API URL
const BASE_URL = process.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
