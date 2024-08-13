import { api } from "@services/api";
import axios from "axios";
import {
  IStoresDataAPI,
  IUserCustomProducts,
  StoreTypesDataAPI,
} from "src/interfaces/Home.interface";

export async function handleGetResumedStoresData() {
  try {
    const { data } = await api.get<IStoresDataAPI[]>("/store/v1/");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`STATUS CODE: ${error.status} - DETAILS: ${error}`);
    }
  }
}

export async function handleGetSectionedProductsData() {
  const storeTypeName = "Lanches";
  try {
    const { data } = await api.get<IUserCustomProducts[]>(
      `/products/v1/customs/${storeTypeName}`,
      {
        params: {
          categoryTitle: "Sanduíches",
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`STATUS CODE: ${error.status} - DETAILS: ${error}`);
    }
  }
}

export async function handleUserCustomProductsData() {
  const storeTypeName = "Lanches";
  try {
    const { data } = await api.get<IUserCustomProducts[]>(
      `/products/v1/customs/${storeTypeName}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`STATUS CODE: ${error.status} - DETAILS: ${error}`);
    }
  }
}

export async function handleGetStoresData() {
  try {
    const { data } = await api.get<IStoresDataAPI[]>("/store/v1/");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`STATUS CODE: ${error.status} - DETAILS: ${error}`);
    }
  }
}

export async function handleGetStoreTypesData() {
  try {
    const { data } = await api.get<StoreTypesDataAPI[]>("/store/v1/types");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`STATUS CODE: ${error.status} - DETAILS: ${error}`);
    }
  }
}
