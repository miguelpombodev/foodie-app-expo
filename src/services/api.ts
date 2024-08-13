import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_HOST_SERVER}:${process.env.EXPO_PUBLIC_API_HOST_PORT}`,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_BEARER_JWT_TOKEN}`,
    refreshToken: process.env.EXPO_PUBLIC_REFRESH_TOKEN,
  },
});

api.interceptors.request.use(
  (config) => {
    console.log("INTERCEPTOR => ", config);
    return config;
  },
  (error) => {
    console.error(`REQUEST ERROS: ${error}`);
    return Promise.reject(error);
  }
);

export { api };
