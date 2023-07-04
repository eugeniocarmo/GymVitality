import axios from 'axios';

const api = axios.create({
  baseURL: 'http://169.254.172.166:3333'
});

// // Testing Interceptor request  
// api.interceptors.request.use((config) => {
//   console.log("DATA SENT =>", config.data);
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

//  Testing Interceptor response
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  console.log("INTERCEPTOR RESPONSE ERROR =>", error);
  return Promise.reject(error);
});

export { api };