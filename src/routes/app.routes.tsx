
import { Icon, useTheme } from "native-base"
import { Platform } from "react-native"
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons"
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "@screens/Home"
import { Profile } from "@screens/Profile"
import { Orders } from "@screens/Orders"
import { Search } from "@screens/Search"

type AppRoutes = {
  home: undefined;
  search: undefined;
  orders: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes () {
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()
  const { sizes, colors } = useTheme()
  const iconSize = 6
  
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarLabelStyle: {
        marginBottom: 10
      },
      tabBarActiveTintColor: colors.black,
      tabBarInactiveTintColor: colors.black,
      tabBarStyle: {
        backgroundColor: colors.white,
        borderTopWidth: 0,
        borderTopColor: colors.gray[400],
        height: 60,
        paddingBottom: 5
      },
    }}>
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon mt={1} as={MaterialIcons} name="home" color="black" size={iconSize}/> 
          ),
          tabBarLabel: "Início"
        }}
      />
      <Screen 
        name="search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Icon mt={1} as={FontAwesome} name="search" color="black" size={iconSize}/> 
          ),
          tabBarLabel: "Busca"
        }}
      />
      <Screen 
        name="orders"
        component={Orders}
        options={{
          tabBarIcon: () => (
            <Icon mt={1} as={MaterialIcons} name="receipt" color="black" size={iconSize}/> 
          ),
          tabBarLabel: "Pedidos"
        }}
      />
      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Icon mt={1} as={Ionicons} name="person-outline" color="black"  size={iconSize}/> 
          ),
          tabBarLabel: "Perfil"
        }}
      />
    </Navigator>
  )
}