import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/foodtribe-1234d/us-central1/api",
  withCredentials: false,
  
});
// const instance = axios.create({
//   baseURL: "http://localhost:5001/foodtribe-1234d/us-central1/api",
// });

//   headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     },
export default instance;
