import axios from "axios";

/*export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: "bearer " + process.env.REACT_APP_API_TOCKEN },
}); */

export const makeRequest = axios.create({
  baseURL: "https://mystore-api-tkef.onrender.com/api",
});
