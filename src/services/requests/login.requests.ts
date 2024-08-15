import { api } from "@services/api";
import axios from "axios";
import { Alert } from "native-base";
import { IUserLoginResponseData } from "src/interfaces/Login.interface";

export async function handleUserLogin(
  userEmail: string
): Promise<IUserLoginResponseData> {
  const requestBody = { email: userEmail };
  try {
    const { data } = await api.post<IUserLoginResponseData>(
      "/account/v1/login",
      requestBody
    );

    if (!data) {
      Alert("Login deu erro");
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`STATUS CODE: ${error.status} - DETAILS: ${error}`);
    }
    throw error;
  }
}
