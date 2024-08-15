import { storageUserAuthGet } from "@storage/storageUser";
import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_HOST_SERVER}:${process.env.EXPO_PUBLIC_API_HOST_PORT}`,
});

api.interceptors.request.use(
  async (config) => {
    const authData = await storageUserAuthGet();

    config.headers["Authorization"] = `Bearer ${authData.token}`;
    config.headers["refreshToken"] = authData.refreshToken;

    return config;
  },
  (error) => {
    console.error(`REQUEST ERROS: ${error}`);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(
        new AppError("Erro no servidor. Tente novamente mais tarde")
      );
    }
  }
);

export { api };
