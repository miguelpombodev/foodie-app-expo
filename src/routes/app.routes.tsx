
import { useTheme } from "native-base"
import { Platform } from "react-native"
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "@screens/Home"

type AppRoutes = {
  home: undefined;
  exercise: undefined;
  history: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes () {
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()
  const { sizes, colors } = useTheme()
  const iconSize = sizes[6]
  
  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === "android" ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen 
        name="home"
        component={Home}
      />
      {/* <Screen 
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySVG fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSVG fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="exercise"
        component={Exercise}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSVG fill={color} width={iconSize} height={iconSize}/>
          ),
          tabBarButton: () => null
        }}
      /> */}
    </Navigator>
  )
}