import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUserLoginResponseData } from "src/interfaces/Login.interface";
import { USER_STORAGE } from "@storage/storageConfig";

export async function storageUserAuthInfosSave(
  userAuthInfos: IUserLoginResponseData
): Promise<void> {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(userAuthInfos));
}

export async function storageUserAuthGet() {
  const storage = await AsyncStorage.getItem(USER_STORAGE);

  const userAuthInfos: IUserLoginResponseData = storage
    ? JSON.parse(storage)
    : {};

  return userAuthInfos;
}
