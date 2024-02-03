import {
  BottomNavigation,
  BottomNavigationProps,
} from '@nx-react-native/shared-ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  GameSelectPage,
  LoadingPage,
  PlayCreatePage,
  PlayerCreatePage,
  PlayerSelectPage,
  PlaysPage,
  ProfilePage,
  StatsPage,
  WelcomePage,
} from '@pages';
import { useAuthentication } from '@shared';

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

const ProfileTab = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
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
        component={ProfileTab}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export const RootStack = () => {
  const { user, isLoading } = useAuthentication();
  const isSignedIn = !!user;

  if (isLoading) {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
      </Stack.Navigator>
    );
  }

  if (isSignedIn) {
    return (
      <Stack.Navigator screenOptions={screenOptions} initialRouteName="Tabs">
        <Stack.Group>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="PlayCreatePage" component={PlayCreatePage} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="GameSelectPage" component={GameSelectPage} />
          <Stack.Screen name="PlayerSelectPage" component={PlayerSelectPage} />
          <Stack.Screen name="PlayerCreatePage" component={PlayerCreatePage} />
        </Stack.Group>
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="WelcomePage"
    >
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
    </Stack.Navigator>
  );
};
