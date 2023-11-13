import axios from 'axios';
// import 'dotenv/config'


export const dashAxios = axios.create({
    // baseURL: process.env.API_BACKEND,
    baseURL: 'https://dashboard-react-avanzado-backend.vercel.app/api/',
    timeout: 12000,
});
dashAxios.interceptors.request.use( config  => {
    config.headers = {
        ...config.headers,
        'x-token': AsyncStorage.getItem('tokenAuth'),
        'Content-Type': 'multipart/form-data'
    }
    return  config;
});