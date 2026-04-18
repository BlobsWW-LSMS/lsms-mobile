import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000
});

api.interceptors.request.use((config) => config);
api.interceptors.response.use((response) => response);
