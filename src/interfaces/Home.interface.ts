export interface StoreTypesDataAPI {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export interface IStoresDataAPI {
  storeAvatar: string;
  storeName: string;
  storeTypeName: string;
  storeRate: number;
}

export interface IUserCustomProducts {
  productAvatar: string;
  productName: string;
  productPrice: number;
  productStoreAvatar: string;
  productStoreName: string;
}
