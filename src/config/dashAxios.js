import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import 'dotenv/config'

export const dashAxios = axios.create({
  // baseURL: process.env.API_BACKEND,
  baseURL: 'https://dashboard-react-avanzado-backend.vercel.app/api',
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
dashAxios.interceptors.request.use(async (config) => {
  config.headers = {
    ...config.headers,
    'x-token': await AsyncStorage.getItem('tokenAuth'),
    'Content-Type': 'multipart/form-data',
  };
  return config;
});
