import { api } from '@services/api';
import { handleUserLogin } from '@services/requests/login.requests';
import { storageUserAuthGet, storageUserAuthInfosSave } from '@storage/storageUser';
import { createContext, useEffect, useState } from 'react';
import { IUserLoginResponseData } from 'src/interfaces/Login.interface';

export type AuthContextDataProps = {
  userAuthTokens: IUserLoginResponseData
  signIn: (email: string) => Promise<void>;
  isLoadingUserStorageData: boolean
}

type AuthContextProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [userAuthTokens, setUserAuthTokens] = useState<IUserLoginResponseData>({} as IUserLoginResponseData)
  const [isLoadingUserStorageData, setIsLoadingUserStorage] = useState(true)

  async function signIn(email: string) {
    const data = await handleUserLogin(email)
    
    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}` 
    api.defaults.headers["refreshToken"] = data.refreshToken

    setUserAuthTokens(data)
    storageUserAuthInfosSave(data)
  }

  async function loadUserAuthInfosData() {
    try {
      const userLogged = await storageUserAuthGet();

      if(userLogged) {
        setUserAuthTokens(userLogged);
        setIsLoadingUserStorage(false)
      }      
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorage(false)
    }
  }

  useEffect(()=> {
    loadUserAuthInfosData()
  }, [])

  return (
    <AuthContext.Provider value={{
      userAuthTokens,
      signIn,
      isLoadingUserStorageData
    }}>
      {children}
    </AuthContext.Provider>
  )
}