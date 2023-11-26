import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import 'dotenv/config'
//const VITE_API_BACKEND='http://192.168.1.17:4010/api/';
export const dashAxios = axios.create({
  // baseURL: process.env.API_BACKEND,
  baseURL: 'https://dashboard-react-avanzado-backend.vercel.app/api',
  //baseURL: 'http://192.168.1.17:4010/api/',  
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
// dashAxios.interceptors.request.use(async (config) => {
//   config.headers = {
//     ...config.headers,
//     'x-token': await AsyncStorage.getItem('tokenAuth'),
//     'Content-Type': 'multipart/form-data',
//   };
//   return config;
// });
dashAxios.interceptors.request.use( 
  async (config)  => {
  const token = await AsyncStorage.getItem('tokenAuth');
  console.log(token, 'token')
  if (token) {
      config.headers['x-token'] = token;
  }
  return  config;
});