import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Login } from '@screens/Login';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
  login: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes () {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen 
        name="signIn"
        component={SignIn}
      />
      <Screen 
        name="signUp"
        component={SignUp}
      />
      <Screen
        name="login"
        component={Login}
      />
    </Navigator>
  )
}