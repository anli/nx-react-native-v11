import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatsPage } from '@pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationProps,
  ThemeProvider,
} from '@nx-react-native/shared-ui';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = { headerShown: false };
const iconConfigs: BottomNavigationProps['iconConfigs'] = {
  PlaysTab: { name: 'PuzzlePieceIcon' },
  StatsTab: { name: 'ChartBarIcon' },
  ProfileTab: { name: 'UserIcon' },
};

const StatsTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="StatsPage" component={StatsPage} />
    </Stack.Navigator>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBar={(props) => (
            <BottomNavigation {...props} iconConfigs={iconConfigs} />
          )}
        >
          <Tab.Screen
            name="PlaysTab"
            component={StatsTab}
            options={{
              title: 'Plays',
            }}
          />
          <Tab.Screen
            name="StatsTab"
            component={StatsTab}
            options={{
              title: 'Stats',
            }}
          />
          <Tab.Screen
            name="ProfileTab"
            component={StatsTab}
            options={{
              title: 'Profile',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
