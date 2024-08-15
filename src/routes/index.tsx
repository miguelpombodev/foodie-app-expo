import {Box, useTheme} from 'native-base'
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from './app.routes';
import { useAuth } from '@hooks/useAuth';
import Loading from '@components/Loading';

export function Routes() {
  const { colors } = useTheme();
  const { userAuthTokens, isLoadingUserStorageData } = useAuth()

  const theme = DefaultTheme
  theme.colors.background = colors.white

  if(isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <Box flex={1}>
      <NavigationContainer theme={theme}>
        {userAuthTokens.token ? <AppRoutes />  :<AuthRoutes />}
      </NavigationContainer>
    </Box>
  )
}