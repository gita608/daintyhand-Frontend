import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // 👈 works in Vite
});

export default api;
