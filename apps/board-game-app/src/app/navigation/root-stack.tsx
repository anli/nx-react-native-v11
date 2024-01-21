import {
  BottomNavigation,
  BottomNavigationProps,
} from '@nx-react-native/shared-ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameSelectPage, PlayCreatePage, PlaysPage, StatsPage } from '@pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: 'white' },
};
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

const PlaysTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="PlaysPage" component={PlaysPage} />
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="PlaysTab"
      screenOptions={screenOptions}
      tabBar={(props) => (
        <BottomNavigation {...props} iconConfigs={iconConfigs} />
      )}
    >
      <Tab.Screen
        name="PlaysTab"
        component={PlaysTab}
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
  );
};

export const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Tabs">
      <Stack.Group>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="PlayCreatePage" component={PlayCreatePage} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="GameSelectPage" component={GameSelectPage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
