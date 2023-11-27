import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const dashAxios = axios.create({
  baseURL: 'https://dashboard-react-avanzado-backend.vercel.app/api',
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

dashAxios.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('tokenAuth');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});
