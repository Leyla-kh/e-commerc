import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://mystore-api-tkef.onrender.com/api",
  // baseURL: "http://localhost:3500/api",
});
