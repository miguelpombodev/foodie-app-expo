import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_HOST_SERVER}:${process.env.EXPO_PUBLIC_API_HOST_PORT}`,
});
